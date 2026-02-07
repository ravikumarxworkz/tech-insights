import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatTimeReadable } from '../../utils/mockInterviewUtils';
import './MockInterview.css';
import { getMockAttemptById } from '../../services/mockInterviewService';

/**
 * RESULTS PAGE
 * Shows score, accuracy, and options to retake or view leaderboard
 */
const ResultsPage = () => {
  const { attemptId } = useParams();
  const navigate = useNavigate();
  const [mockData, setMockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const load = async () => {
      // 1) Prefer navigation state (fastest)
      if (location.state && location.state.mockData) {
        setMockData(location.state.mockData);
        setLoading(false);
        return;
      }

      // 2) Then sessionStorage
      const savedData = sessionStorage.getItem(`mockAttempt_${attemptId}`);
      if (savedData) {
        setMockData(JSON.parse(savedData));
        setLoading(false);
        return;
      }

      // 3) Fallback to Firestore
      try {
        const remote = await getMockAttemptById(attemptId);
        if (remote) {
          setMockData(remote);
        }
      } catch (e) {
        console.error('Failed to fetch mock attempt:', e);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [attemptId]);

  if (loading) {
    return <div className="loading">Loading results...</div>;
  }

  if (!mockData) {
    return <div className="error">No results found</div>;
  }

  const passPercentage = 60; // 60% is passing
  const isPassed = mockData.accuracy >= passPercentage;

  return (
    <main className="results-page">
      {/* Results Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`results-card ${isPassed ? 'passed' : 'failed'}`}
      >
        {/* Result Icon */}
        <div className="result-icon">
          {isPassed ? '✅' : '⚠️'}
        </div>

        {/* Result Status */}
        <h1 className={`result-status ${isPassed ? 'passed' : 'failed'}`}>
          {isPassed ? 'Great Job!' : 'Keep Practicing!'}
        </h1>

        {/* Domain & Set Info */}
        <div className="result-meta">
          <span className="badge domain-badge">{mockData.domain.toUpperCase()}</span>
          <span className="badge set-badge">{mockData.setType.toUpperCase()}</span>
        </div>

        {/* Score Section */}
        <div className="score-section">
          <div className="score-card">
            <div className="score-display">
              <span className="score-number">{mockData.score}</span>
              <span className="score-total">/ {mockData.totalScore}</span>
            </div>
            <p className="score-label">Total Score</p>
          </div>

          <div className="score-card">
            <div className="accuracy-circle">
              <span className="accuracy-percent">{mockData.accuracy}%</span>
            </div>
            <p className="score-label">Accuracy</p>
          </div>

          <div className="score-card">
            <div className="correct-count">
              <span className="count">{mockData.correctAnswers}</span>
              <span className="count-label">Correct</span>
            </div>
            <p className="score-label">Out of {mockData.totalQuestions}</p>
          </div>
        </div>

        {/* Points Earned */}
        <div className="points-earned">
          <span className="points-label">Leaderboard Points Earned:</span>
          <span className="points-value">{mockData.points} pts</span>
        </div>

        {/* Time Taken */}
        <div className="time-section">
          <span className="time-label">Time Taken:</span>
          <span className="time-value">{formatTimeReadable(mockData.timeTaken)}</span>
        </div>

        {/* Performance Breakdown */}
        <div className="performance-breakdown">
          <h3>Performance Breakdown</h3>
          <div className="breakdown-grid">
            <div className="breakdown-item">
              <span className="breakdown-icon">✓</span>
              <span className="breakdown-label">Correct</span>
              <span className="breakdown-value">{mockData.correctAnswers}</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-icon">✗</span>
              <span className="breakdown-label">Incorrect</span>
              <span className="breakdown-value">{mockData.totalQuestions - mockData.correctAnswers}</span>
            </div>
            <div className="breakdown-item">
              <span className="breakdown-icon">⏱️</span>
              <span className="breakdown-label">Avg Time/Q</span>
              <span className="breakdown-value">
                {Math.round(mockData.timeTaken / mockData.totalQuestions)}s
              </span>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="result-actions">
          <button
            className="btn btn-primary"
            onClick={() => navigate(`/mock-interview/${mockData.domain}`)}
          >
            Attempt Another Set
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate(`/leaderboard/${mockData.domain}`)}
          >
            View Domain Leaderboard
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => navigate('/dashboard')}
          >
            Go to Dashboard
          </button>
          <button
            className="btn btn-outline"
            onClick={() => navigate('/')}
          >
            Home
          </button>
        </div>

        {/* Feedback */}
        <div className="feedback-section">
          {isPassed ? (
            <>
              <h4>Excellent Performance! 🎉</h4>
              <p>You've demonstrated strong knowledge. Challenge yourself with harder questions!</p>
            </>
          ) : (
            <>
              <h4>Room for Improvement 📚</h4>
              <p>Review the concepts and try again. Each attempt helps you learn better!</p>
            </>
          )}
        </div>
      </motion.div>
    </main>
  );
};

export default ResultsPage;
