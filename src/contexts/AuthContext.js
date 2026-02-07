import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { auth } from '../services/firebase';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { saveUserProfile, getUserProfile } from '../services/mockInterviewService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // ========================
  // INITIALIZE AUTH STATE
  // ========================
  useEffect(() => {
    if (!auth) {
      console.warn('Firebase Auth not initialized. Using demo mode.');
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          // Fetch user profile from Firestore to get custom fields like isAdmin
          const profile = await getUserProfile(currentUser.uid);
          // Merge Firestore profile with auth user
          const mergedUser = {
            ...currentUser,
            ...(profile || {}),
          };
          setUser(mergedUser);
        } catch (e) {
          console.warn('Failed to fetch user profile, using auth user only:', e.message);
          setUser(currentUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // ========================
  // LOGIN WITH EMAIL & PASSWORD
  // ========================
  const login = useCallback(async (email, password) => {
    try {
      if (!auth) {
        throw new Error('Firebase auth not configured. Please set up Firebase credentials.');
      }
      setError('');
      const result = await signInWithEmailAndPassword(auth, email, password);
      setUser(result.user);
      // Ensure user profile exists/updated in Firestore
      try {
        await saveUserProfile(result.user.uid, {
          displayName: result.user.displayName || '',
          email: result.user.email || '',
          photoURL: result.user.photoURL || '',
        });
      } catch (e) {
        console.warn('Failed to save user profile after login:', e.message);
      }
      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // ========================
  // SIGN UP WITH EMAIL & PASSWORD
  // ========================
  const signup = useCallback(async (email, password, displayName) => {
    try {
      if (!auth) {
        throw new Error('Firebase auth not configured. Please set up Firebase credentials.');
      }
      setError('');
      const result = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName && result.user.updateProfile) {
        await result.user.updateProfile({ displayName });
      }
      setUser(result.user);

      // Save user profile to Firestore
      try {
        await saveUserProfile(result.user.uid, {
          displayName: result.user.displayName || displayName || '',
          email: result.user.email || '',
          photoURL: result.user.photoURL || '',
        });
      } catch (e) {
        console.warn('Failed to save user profile after signup:', e.message);
      }

      return result.user;
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  // ========================
  // LOGOUT
  // ========================
  const logout = useCallback(async () => {
    try {
      if (!auth) {
        setUser(null);
        return;
      }
      setError('');
      await signOut(auth);
      setUser(null);
    } catch (err) {
      setError(err.message);
      throw err;
    }
  }, []);

  const value = {
    user,
    loading,
    error,
    login,
    signup,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// ========================
// useAuth HOOK
// ========================
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
