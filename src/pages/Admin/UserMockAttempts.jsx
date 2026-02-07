// src/pages/Admin/UserMockAttempts.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  getUserMockAttemptsAdmin,
  filterMockAttemptsByDateRange,
  exportAsCSV,
  exportAsJSON,
  downloadFile,
} from '../../services/adminService';
import MockDetailsModal from './MockDetailsModal';
import { FaEye, FaDownload, FaTimes } from 'react-icons/fa';
import './AdminPanel.css';

const UserMockAttempts = ({ user, users, onBack }) => {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedMock, setSelectedMock] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Download filters
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterApplied, setFilterApplied] = useState(false);

  // Fetch user's mock attempts
  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        setLoading(true);
        const data = await getUserMockAttemptsAdmin(user.id);
        setAttempts(data);
        setError('');
      } catch (err) {
        setError('Failed to load mock attempts');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchAttempts();
  }, [user.id]);

  // Get filtered attempts for download
  const getFilteredAttempts = () => {
    if (!startDate || !endDate) return attempts;

    const start = new Date(startDate);
    const end = new Date(endDate);
    end.setHours(23, 59, 59);

    return filterMockAttemptsByDateRange(attempts, start, end);
  };

  const handleDownloadCSV = () => {
    const filtered = getFilteredAttempts();
    if (filtered.length === 0) {
      alert('No data to download for selected date range');
      return;
    }

    const csv = exportAsCSV(filtered, users);
    downloadFile(
      csv,
      `${user.displayName || user.email}_attempts_${new Date().toISOString().split('T')[0]}.csv`,
      'text/csv'
    );
  };

  const handleDownloadJSON = () => {
    const filtered = getFilteredAttempts();
    if (filtered.length === 0) {
      alert('No data to download for selected date range');
      return;
    }

    const json = exportAsJSON(filtered, users);
    downloadFile(
      json,
      `${user.displayName || user.email}_attempts_${new Date().toISOString().split('T')[0]}.json`,
      'application/json'
    );
  };

  const handleApplyFilter = () => {
    setFilterApplied(!filterApplied);
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const dateObj = date instanceof Date ? date : new Date(date);
    return dateObj.toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleViewDetails = (mock) => {
    setSelectedMock(mock);
    setShowModal(true);
  };

  const filteredAttempts = filterApplied ? getFilteredAttempts() : attempts;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="user-attempts-section"
    >
      {/* Header */}
      <div className="attempts-header">
        <button className="btn-back" onClick={onBack}>
          ← Back to Users
        </button>
        <div>
          <h2>{user.displayName || user.email}</h2>
          <p className="user-email">{user.email}</p>
        </div>
      </div>

      {/* Download & Filter Section */}
      <div className="download-filter-section">
        <h3>Download Data</h3>
        <div className="filter-group">
          <div className="date-inputs">
            <div className="input-group">
              <label>From Date:</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>To Date:</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </div>
          </div>

          <div className="download-buttons">
            <button className="btn btn-primary" onClick={handleDownloadCSV}>
              <FaDownload /> CSV
            </button>
            <button className="btn btn-primary" onClick={handleDownloadJSON}>
              <FaDownload /> JSON
            </button>
          </div>
        </div>

        {startDate && endDate && (
          <button
            className={`btn-toggle-filter ${filterApplied ? 'active' : ''}`}
            onClick={handleApplyFilter}
          >
            {filterApplied ? '✓ Filter Applied' : 'Apply Filter'}
          </button>
        )}
      </div>

      {/* Mock Attempts List */}
      <div className="attempts-section">
        <h3>Mock Interview Attempts ({filteredAttempts.length})</h3>

        {loading && <div className="loading">Loading attempts...</div>}

        {error && <div className="error-message">{error}</div>}

        {!loading && filteredAttempts.length === 0 ? (
          <div className="no-attempts">
            <p>
              {attempts.length === 0
                ? 'No mock attempts found'
                : 'No attempts found for selected date range'}
            </p>
          </div>
        ) : (
          <div className="attempts-list">
            {filteredAttempts.map((attempt, idx) => (
              <motion.div
                key={attempt.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="attempt-card"
              >
                <div className="attempt-info">
                  <div className="attempt-main">
                    <span className="attempt-domain">{attempt.domain}</span>
                    <span className="attempt-score">
                      Score: {attempt.score}/{attempt.totalQuestions}
                    </span>
                    <span className="attempt-accuracy">
                      Accuracy: {attempt.accuracy}%
                    </span>
                  </div>
                  <div className="attempt-meta">
                    <span className="attempt-date">{formatDate(attempt.createdAt)}</span>
                    <span className="attempt-points">Points: {attempt.points}</span>
                  </div>
                </div>

                <button
                  className="btn-view-details"
                  onClick={() => handleViewDetails(attempt)}
                  title="View complete mock test details"
                >
                  <FaEye /> View Details
                </button>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Mock Details Modal */}
      {showModal && selectedMock && (
        <MockDetailsModal
          attempt={selectedMock}
          user={user}
          questions={[]}
          onClose={() => setShowModal(false)}
        />
      )}
    </motion.div>
  );
};

export default UserMockAttempts;
