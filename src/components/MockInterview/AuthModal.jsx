import React from 'react';
import ReactDOM from 'react-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext';
import { auth } from '../../services/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import './MockInterview.css';

/**
 * AUTH MODAL
 * Login/Signup modal shown when user tries to take a test
 */
const AuthModal = ({ onClose, onSuccess }) => {
  const [authMode, setAuthMode] = React.useState('login'); // login or signup
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');
  const { login, signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (auth == null) {
        throw new Error('Firebase not initialized');
      }

      if (authMode === 'login') {
        // Use AuthContext login
        await login(email, password);
      } else {
        // Sign up and set display name
        const user = await signup(email, password, name);
        // Some Firebase SDKs require updateProfile on user object - AuthContext handles it when possible
        console.log('Signed up user:', user?.uid || '(no uid)');
      }

      // Call onSuccess after authentication
      onSuccess();
    } catch (err) {
      setError(err.message || 'Authentication failed');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError('');

    try {
      if (!auth) throw new Error('Firebase not initialized');
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      onSuccess();
    } catch (err) {
      setError(err.message || 'Google sign-in failed');
    } finally {
      setLoading(false);
    }
  };

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="auth-modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95 }}
        animate={{ scale: 1 }}
        className="auth-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <div className="auth-header">
          <h2>{authMode === 'login' ? 'Login' : 'Sign Up'}</h2>
          <p>
            {authMode === 'login'
              ? 'Login to start your mock interview'
              : 'Create an account to save your progress'}
          </p>
        </div>

        {/* Error Message */}
        {error && <div className="error-message">{error}</div>}

        {/* Form */}
        <form onSubmit={handleSubmit} className="auth-form">
          {authMode === 'signup' && (
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Minimum 6 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary btn-block">
            {loading ? 'Loading...' : authMode === 'login' ? 'Login' : 'Sign Up'}
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Sign In */}
        <button onClick={handleGoogleSignIn} disabled={loading} className="btn btn-google btn-block">
          🔐 Sign in with Google
        </button>

        {/* Mode Toggle */}
        <div className="auth-footer">
          {authMode === 'login' ? (
            <>
              Don't have an account?{' '}
              <button
                type="button"
                onClick={() => setAuthMode('signup')}
                className="link-btn"
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button
                type="button"
                onClick={() => setAuthMode('login')}
                className="link-btn"
              >
                Login
              </button>
            </>
          )}
        </div>
      </motion.div>
    </motion.div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

export default AuthModal;
