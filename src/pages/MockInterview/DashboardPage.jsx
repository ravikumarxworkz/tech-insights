import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { getUserStatistics } from '../../services/mockInterviewService';
import { motion } from 'framer-motion';
import './MockInterview.css';

/**
 * USER DASHBOARD (PRIVATE)
 * Shows user's mock attempt history, statistics, and performance
 */
const DashboardPage = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState(null);
  const [loadingStats, setLoadingStats] = useState(true);

  useEffect(() => {
    if (authLoading) return; // Wait for auth to finish loading

    if (!user) {
      navigate('/mock-interview'); // Redirect to login page
      return;
    }

    const fetchStats = async () => {
      try {
        const userStats = await getUserStatistics(user.uid);
        setStats(userStats);
      } catch (error) {
        console.error('Error fetching statistics:', error);
        setStats({
          totalMocks: 0,
          bestScore: 0,
          averageScore: 0,
          latestScore: 0,
          domainWiseStats: {},
          recentAttempts: [],
        });
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, [user, authLoading, navigate]);

  if (authLoading || loadingStats) {
    return (
      <div className="loading-container">
        <div className="loading">Loading your dashboard...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect
  }

  if (!stats) {
    return (
      <div className="error-container">
        <div className="error">Failed to load statistics</div>
      </div>
    );
  }

  return (
    <main className="dashboard-page">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="dashboard-header"
      >
        <div className="header-content">
          <h1>Welcome, {user.displayName || user.email?.split('@')[0] || 'User'}! 👋</h1>
          <p>Track your progress and improve your interview skills</p>
        </div>
        <button onClick={() => navigate('/mock-interview')} className="btn btn-primary">
          Start New Mock →
        </button>
      </motion.section>

      {/* Empty State - No Mocks Yet */}
      {stats.totalMocks === 0 ? (
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="empty-dashboard"
        >
          <div className="empty-content">
            <div className="empty-icon">🎯</div>
            <h2>No Mocks Attempted Yet</h2>
            <p>Start your first mock interview to see your progress here!</p>
            <button onClick={() => navigate('/mock-interview')} className="btn btn-primary btn-large">
              Take Your First Mock →
            </button>
          </div>
        </motion.section>
      ) : (
        <>
          {/* Key Statistics */}
          <section className="stats-grid">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="stat-card"
            >
              <div className="stat-icon">📝</div>
              <div className="stat-content">
                <span className="stat-value">{stats.totalMocks}</span>
                <span className="stat-label">Total Mocks Attempted</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="stat-card highlight"
            >
              <div className="stat-icon">⭐</div>
              <div className="stat-content">
                <span className="stat-value">{stats.bestScore}/30</span>
                <span className="stat-label">Best Score</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="stat-card"
            >
              <div className="stat-icon">📊</div>
              <div className="stat-content">
                <span className="stat-value">{parseFloat(stats.averageScore).toFixed(1)}/30</span>
                <span className="stat-label">Average Score</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="stat-card"
            >
              <div className="stat-icon">🎯</div>
              <div className="stat-content">
                <span className="stat-value">{stats.latestScore}/30</span>
                <span className="stat-label">Latest Score</span>
              </div>
            </motion.div>
          </section>

          {/* Domain-wise Performance */}
          {stats.domainWiseStats && Object.keys(stats.domainWiseStats).length > 0 && (
            <section className="domain-performance">
              <h2>Domain-wise Performance</h2>
              <div className="domain-cards">
                {Object.entries(stats.domainWiseStats).map(([domain, data]) => (
                  <motion.div
                    key={domain}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="domain-card-stat"
                  >
                    <h3>{domain.toUpperCase()}</h3>
                    <div className="domain-stat-item">
                      <span className="label">Attempts:</span>
                      <span className="value">{data.attempts}</span>
                    </div>
                    <div className="domain-stat-item">
                      <span className="label">Best Score:</span>
                      <span className="value">{data.bestScore}/30</span>
                    </div>
                    <div className="domain-stat-item">
                      <span className="label">Average:</span>
                      <span className="value">{parseFloat(data.averageScore).toFixed(1)}/30</span>
                    </div>
                    <div className="domain-stat-item">
                      <span className="label">Total Points:</span>
                      <span className="value highlight">{data.totalPoints}</span>
                    </div>
                    <button
                      onClick={() => navigate(`/leaderboard/${domain}`)}
                      className="domain-btn"
                    >
                      View Leaderboard →
                    </button>
                  </motion.div>
                ))}
              </div>
            </section>
          )}

          {/* Recent Attempts */}
          {stats.recentAttempts && stats.recentAttempts.length > 0 && (
            <section className="recent-attempts">
              <h2>Recent Attempts</h2>
              <div className="attempts-list">
                {stats.recentAttempts.map((attempt, index) => (
                  <motion.div
                    key={attempt.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="attempt-card"
                  >
                    <div className="attempt-info">
                      <span className="domain-badge">{attempt.domain.toUpperCase()}</span>
                      <span className="set-badge">{attempt.setType.toUpperCase()}</span>
                    </div>
                    <div className="attempt-score">
                      <span className="score">{attempt.score}/30</span>
                      <span className="accuracy">{attempt.accuracy}%</span>
                    </div>
                    <div className="attempt-date">
                      {(() => {
                        const ts = attempt.createdAt;
                        let dateObj;
                        if (!ts) return '';
                        if (ts.toDate && typeof ts.toDate === 'function') {
                          dateObj = ts.toDate();
                        } else if (typeof ts === 'number' || typeof ts === 'string') {
                          dateObj = new Date(ts);
                        } else if (ts instanceof Date) {
                          dateObj = ts;
                        } else {
                          try {
                            dateObj = new Date(ts);
                          } catch (e) {
                            dateObj = null;
                          }
                        }
                        return dateObj ? dateObj.toLocaleDateString() : '';
                      })()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </main>
  );
};

export default DashboardPage;
