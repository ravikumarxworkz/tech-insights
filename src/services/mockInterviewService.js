import {
  collection,
  addDoc,
  query,
  where,
  orderBy,
  getDocs,
  doc,
  setDoc,
  getDoc,
  limit,
} from 'firebase/firestore';
import { db } from './firebase';

// ========================
// HELPER: Generate Random Avatar URL
// ========================
const generateRandomAvatar = (userName = 'User') => {
  // Option 1: UI Avatars (text-based with random colors)
  const colors = ['039be5', '4caf50', 'ff9800', 'e91e63', '9c27b0', 'f44336', '00bcd4', 'ff5722'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const initials = getInitials(userName);
  
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(initials)}&background=${randomColor}&color=fff&size=200&bold=true&rounded=true`;
  
  // Option 2: DiceBear Avatars (various styles)
  // const styles = ['avataaars', 'bottts', 'adventurer', 'big-smile', 'lorelei', 'micah', 'pixel-art'];
  // const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  // const seed = userName + Date.now();
  // return `https://api.dicebear.com/7.x/${randomStyle}/svg?seed=${encodeURIComponent(seed)}`;
  
  // Option 3: Boring Avatars
  // const variants = ['marble', 'beam', 'pixel', 'sunset', 'ring', 'bauhaus'];
  // const randomVariant = variants[Math.floor(Math.random() * variants.length)];
  // return `https://source.boringavatars.com/${randomVariant}/200/${encodeURIComponent(userName)}?colors=039be5,4caf50,ff9800,e91e63,9c27b0`;
};

const getInitials = (name) => {
  if (!name) return 'U';
  const parts = name.trim().split(' ').filter(n => n.length > 0);
  if (parts.length === 1) {
    return parts[0].substring(0, 2).toUpperCase();
  }
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
};

// ========================
// SAVE MOCK ATTEMPT
// ========================
export const saveMockAttempt = async (userId, mockData) => {
  try {
    const docRef = await addDoc(collection(db, 'mockAttempts'), {
      userId,
      domain: mockData.domain,
      setType: mockData.setType, // 'easy', 'medium', 'hard', 'mixed'
      score: mockData.score, // e.g., 24/30
      totalQuestions: mockData.totalQuestions, // 15
      correctAnswers: mockData.correctAnswers, // 12
      accuracy: mockData.accuracy, // 80%
      timeTaken: mockData.timeTaken, // 900 (seconds)
      points: mockData.points, // Calculated from score
      createdAt: new Date(),
      timeStarted: mockData.timeStarted,
      answers: mockData.answers // Store user's answers for review (optional)
    });
    
    // Update user's leaderboard points
    await updateUserLeaderboardPoints(userId, mockData.points, mockData.domain);
    
    return docRef.id;
  } catch (error) {
    console.error('Error saving mock attempt:', error);
    throw error;
  }
};

// ========================
// GET USER'S MOCK ATTEMPTS
// ========================
export const getUserMockAttempts = async (userId) => {
  try {
    const q = query(
      collection(db, 'mockAttempts'),
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Error fetching mock attempts:', error);
    return [];
  }
};

// ========================
// GET USER STATISTICS
// ========================
export const getUserStatistics = async (userId) => {
  try {
    const attempts = await getUserMockAttempts(userId);
    
    if (attempts.length === 0) {
      return {
        totalMocks: 0,
        bestScore: 0,
        averageScore: 0,
        latestScore: 0,
        domainWiseStats: {},
        recentAttempts: [],
      };
    }

    // Calculate stats
    const scores = attempts.map(a => a.score);
    const bestScore = Math.max(...scores);
    const averageScore = (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1);
    const latestScore = attempts[0].score;

    // Domain-wise stats
    const domainWiseStats = {};
    attempts.forEach(attempt => {
      if (!domainWiseStats[attempt.domain]) {
        domainWiseStats[attempt.domain] = {
          attempts: 0,
          bestScore: 0,
          averageScore: 0,
          totalPoints: 0,
        };
      }
      domainWiseStats[attempt.domain].attempts += 1;
      domainWiseStats[attempt.domain].bestScore = Math.max(
        domainWiseStats[attempt.domain].bestScore,
        attempt.score
      );
      domainWiseStats[attempt.domain].totalPoints += attempt.points;
    });

    // Calculate domain averages
    Object.keys(domainWiseStats).forEach(domain => {
      const stats = domainWiseStats[domain];
      stats.averageScore = (
        attempts
          .filter(a => a.domain === domain)
          .reduce((sum, a) => sum + a.score, 0) / stats.attempts
      ).toFixed(1);
    });

    return {
      totalMocks: attempts.length,
      bestScore,
      averageScore: parseFloat(averageScore),
      latestScore,
      domainWiseStats,
      recentAttempts: attempts.slice(0, 5),
    };
  } catch (error) {
    console.error('Error fetching user statistics:', error);
    return null;
  }
};

// ========================
// UPDATE LEADERBOARD
// ========================
export const updateUserLeaderboardPoints = async (userId, points, domain) => {
  try {
    const leaderboardDocId = `${domain}_overall`;
    
    // Get user's profile to get name
    const userRef = doc(db, 'users', userId);
    const userSnap = await getDoc(userRef);
    
    if (userSnap.exists()) {
      const userData = userSnap.data();
      
      // Add/update leaderboard entry
      await setDoc(
        doc(db, 'leaderboards', leaderboardDocId, 'entries', userId),
        {
          userId,
          name: userData.displayName || 'Anonymous',
          photoURL: userData.photoURL || '', // Include avatar in leaderboard
          points: (await getLeaderboardPoints(userId, domain)) + points,
          lastUpdated: new Date(),
        },
        { merge: true }
      );
    }
  } catch (error) {
    console.error('Error updating leaderboard:', error);
  }
};

// ========================
// GET LEADERBOARD (OVERALL)
// ========================
export const getOverallLeaderboard = async (limitCount = 50) => {
  try {
    const leaderboardRef = collection(db, 'leaderboards', 'overall_combined', 'entries');
    const q = query(leaderboardRef, orderBy('points', 'desc'), limit(limitCount));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      ...doc.data(),
    }));
  } catch (error) {
    console.error('Error fetching overall leaderboard:', error);
    return [];
  }
};

// ========================
// GET DOMAIN LEADERBOARD
// ========================
export const getDomainLeaderboard = async (domain, limitCount = 50) => {
  try {
    const leaderboardRef = collection(db, 'leaderboards', `${domain}_overall`, 'entries');
    const q = query(leaderboardRef, orderBy('points', 'desc'), limit(limitCount));
    const snapshot = await getDocs(q);
    
    return snapshot.docs.map((doc, index) => ({
      rank: index + 1,
      ...doc.data(),
    }));
  } catch (error) {
    console.error(`Error fetching ${domain} leaderboard:`, error);
    return [];
  }
};

// ========================
// HELPER: Get current leaderboard points
// ========================
const getLeaderboardPoints = async (userId, domain) => {
  try {
    const docRef = doc(db, 'leaderboards', `${domain}_overall`, 'entries', userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data().points : 0;
  } catch (error) {
    return 0;
  }
};

// ========================
// CREATE/UPDATE USER PROFILE
// ========================
export const saveUserProfile = async (userId, userData) => {
  try {
    const userRef = doc(db, 'users', userId);

    // Check if user document already exists
    const existing = await getDoc(userRef);

    if (existing.exists()) {
      // Preserve existing role and createdAt; only update mutable fields
      const updates = {
        displayName: userData.displayName || existing.data().displayName || '',
        email: userData.email || existing.data().email || '',
        photoURL: userData.photoURL || existing.data().photoURL || '',
        lastLogin: new Date(),
      };

      await setDoc(userRef, updates, { merge: true });
    } else {
      // New user: set defaults including role = 'user' and random avatar
      const defaultPhotoURL = userData.photoURL || generateRandomAvatar(userData.displayName || userData.email);
      
      const userDataToSave = {
        uid: userId,
        displayName: userData.displayName || '',
        email: userData.email || '',
        photoURL: defaultPhotoURL, // Random avatar URL
        role: userData.role || 'user', // Default role is 'user'
        createdAt: userData.createdAt || new Date(),
        lastLogin: new Date(),
      };

      await setDoc(userRef, userDataToSave, { merge: true });
    }
  } catch (error) {
    console.error('Error saving user profile:', error);
    throw error;
  }
};

// ========================
// GET USER PROFILE
// ========================
export const getUserProfile = async (userId) => {
  try {
    const docSnap = await getDoc(doc(db, 'users', userId));
    return docSnap.exists() ? docSnap.data() : null;
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return null;
  }
};

// ========================
// GET MOCK ATTEMPT BY ID
// ========================
export const getMockAttemptById = async (attemptId) => {
  try {
    const docRef = doc(db, 'mockAttempts', attemptId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
  } catch (error) {
    console.error('Error fetching mock attempt by id:', error);
    return null;
  }
};