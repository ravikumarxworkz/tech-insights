import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../../contexts/AuthContext'; // Your auth context
import AuthModal from '../../components/MockInterview/AuthModal';
import './MockInterview.css';

/**
 * DOMAIN PAGE - Set Selection
 * Shows Easy, Medium, Hard, Mixed sets for a domain
 */
const DomainPage = () => {
  const { domain } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedSet, setSelectedSet] = useState(null);

  const sets = [
    {
      id: 'easy',
      title: 'Easy Set',
      description: '15 Easy Questions',
      difficulty: 'easy',
      icon: '🟢',
      color: '#22c55e',
    },
    {
      id: 'medium',
      title: 'Medium Set',
      description: '15 Medium Questions',
      difficulty: 'medium',
      icon: '🟡',
      color: '#f59e0b',
    },
    {
      id: 'hard',
      title: 'Hard Set',
      description: '15 Hard Questions',
      difficulty: 'hard',
      icon: '🔴',
      color: '#ef4444',
    },
    {
      id: 'mixed',
      title: 'Mixed Set',
      description: '5 Easy + 5 Medium + 5 Hard',
      difficulty: 'mixed',
      icon: '🎲',
      color: '#8b5cf6',
    },
  ];

  const handleSetClick = (setId) => {
    if (!user) {
      // User not logged in - show auth modal
      setSelectedSet(setId);
      setShowAuthModal(true);
    } else {
      // User logged in - start mock
      navigate(`/mock-interview/${domain}/${setId}/test`, {
        state: { domain, setType: setId },
      });
    }
  };

  const handleAuthSuccess = () => {
    // After successful auth, start mock
    setShowAuthModal(false);
    navigate(`/mock-interview/${domain}/${selectedSet}/test`, {
      state: { domain, setType: selectedSet },
    });
  };

  const domainTitle = domain.charAt(0).toUpperCase() + domain.slice(1);

  return (
    <main className="domain-page">
      {/* Header */}
      <section className="domain-header">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1>{domainTitle} Mock Interviews</h1>
          <p>Choose your difficulty level and start practicing</p>
        </motion.div>
        <button
          onClick={() => navigate(`/leaderboard/${domain}`)}
          className="leaderboard-link-btn"
          title={`View ${domainTitle} Leaderboard`}
        >
          🏆 View Leaderboard
        </button>
      </section>

      {/* Set Selection */}
      <section className="sets-section">
        <div className="sets-grid">
          {sets.map((set, index) => (
            <motion.div
              key={set.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleSetClick(set.id)}
              className="set-card"
              style={{ borderColor: set.color }}
            >
              <div className="set-icon">{set.icon}</div>
              <h3>{set.title}</h3>
              <p>{set.description}</p>
              <button className="set-start-btn" style={{ borderColor: set.color }}>
                Start Test →
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="test-info">
        <h3>Test Details</h3>
        <div className="info-grid">
          <div className="info-item">
            <span className="info-label">Duration</span>
            <span className="info-value">30 minutes</span>
          </div>
          <div className="info-item">
            <span className="info-label">Questions</span>
            <span className="info-value">15</span>
          </div>
          <div className="info-item">
            <span className="info-label">Points per Question</span>
            <span className="info-value">2</span>
          </div>
          <div className="info-item">
            <span className="info-label">Total Score</span>
            <span className="info-value">30</span>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={handleAuthSuccess}
        />
      )}
    </main>
  );
};

export default DomainPage;
