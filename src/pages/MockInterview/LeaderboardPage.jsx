import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getDomainLeaderboard, getOverallLeaderboard } from '../../services/mockInterviewService';
import './MockInterview.css';

/**
 * LEADERBOARD PAGE
 * Shows top performers for a domain or overall
 */
const LeaderboardPage = () => {
  const { domain = 'overall' } = useParams();
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [period, setPeriod] = useState('all'); // all, week, month

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        let data;
        if (domain === 'overall') {
          data = await getOverallLeaderboard(50);
        } else {
          data = await getDomainLeaderboard(domain, 50);
        }
        setLeaderboard(data);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, [domain, period]);

  return (
    <main className="leaderboard-page">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="leaderboard-header"
      >
        <h1>
          🏆{' '}
          {domain === 'overall'
            ? 'Overall Leaderboard'
            : `${domain.toUpperCase()} Leaderboard`}
        </h1>
        <p>Top performers across all mock interviews</p>
      </motion.section>

      {/* Period Filter */}
      <section className="filter-section">
        <div className="period-filter">
          <button
            className={`filter-btn ${period === 'all' ? 'active' : ''}`}
            onClick={() => setPeriod('all')}
          >
            All Time
          </button>
          <button
            className={`filter-btn ${period === 'week' ? 'active' : ''}`}
            onClick={() => setPeriod('week')}
          >
            This Week
          </button>
          <button
            className={`filter-btn ${period === 'month' ? 'active' : ''}`}
            onClick={() => setPeriod('month')}
          >
            This Month
          </button>
        </div>
      </section>

      {/* Leaderboard Table */}
      <section className="leaderboard-container">
        {loading ? (
          <div className="loading">Loading leaderboard...</div>
        ) : leaderboard.length === 0 ? (
          <div className="empty-state">
            <p>No entries yet. Be the first to appear on the leaderboard!</p>
          </div>
        ) : (
          <div className="leaderboard-table">
            {/* Header */}
            <div className="table-header">
              <div className="col-rank">Rank</div>
              <div className="col-name">Name</div>
              <div className="col-points">Points</div>
            </div>

            {/* Rows */}
            {leaderboard.map((entry, index) => (
              <motion.div
                key={entry.userId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className={`table-row ${
                  index === 0 ? 'gold' : index === 1 ? 'silver' : index === 2 ? 'bronze' : ''
                }`}
              >
                <div className="col-rank">
                  {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : entry.rank}
                </div>
                <div className="col-name">{entry.name || 'Anonymous'}</div>
                <div className="col-points">
                  <span className="points-badge">{entry.points}</span>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* Info Card */}
      <section className="leaderboard-info">
        <h3>📊 Leaderboard Info</h3>
        <div className="info-cards">
          <div className="info-card">
            <span className="label">Points per Score</span>
            <span className="value">26-30: 30pts | 21-25: 25pts | 16-20: 20pts</span>
          </div>
          <div className="info-card">
            <span className="label">Frequency</span>
            <span className="value">Updated immediately after test submission</span>
          </div>
          <div className="info-card">
            <span className="label">Ranking</span>
            <span className="value">Based on cumulative points across all attempts</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default LeaderboardPage;
