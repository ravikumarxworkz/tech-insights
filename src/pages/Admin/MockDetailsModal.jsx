// src/pages/Admin/MockDetailsModal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import './AdminPanel.css';

const MockDetailsModal = ({ attempt, user, questions, onClose }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);

  if (!attempt) return null;

  const getQuestionById = (questionId) => {
    return questions?.find(q => q.id === questionId);
  };

  const formatDate = (date) => {
    if (!date) return 'N/A';
    const dateObj = date instanceof Date ? date : new Date(date);
    return dateObj.toLocaleString('en-US');
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="mock-details-modal"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="modal-header">
          <div>
            <h2>Mock Interview Details</h2>
            <p className="modal-subtitle">
              {user?.displayName || 'Unknown'} • {attempt.domain} • {formatDate(attempt.createdAt)}
            </p>
          </div>
          <button className="close-modal-btn" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* Stats */}
        <div className="modal-stats">
          <div className="stat-box">
            <span className="stat-label">Score</span>
            <span className="stat-value">{attempt.score || 0}/{attempt.totalQuestions || 0}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Accuracy</span>
            <span className="stat-value">{attempt.accuracy || 0}%</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Points</span>
            <span className="stat-value">{attempt.points || 0}</span>
          </div>
          <div className="stat-box">
            <span className="stat-label">Difficulty</span>
            <span className="stat-value">{attempt.setType || 'N/A'}</span>
          </div>
        </div>

        {/* Questions and Answers */}
        <div className="modal-body">
          <h3>Question Details</h3>
          {attempt.answers && Object.keys(attempt.answers).length > 0 ? (
            <div className="questions-list">
              {Object.entries(attempt.answers).map(([questionId, userAnswer], idx) => {
                const question = getQuestionById(questionId);
                const isCorrect = userAnswer === question?.correctAnswer;
                const isExpanded = expandedQuestion === questionId;

                return (
                  <div key={questionId} className="question-card">
                    <button
                      className="question-header"
                      onClick={() =>
                        setExpandedQuestion(isExpanded ? null : questionId)
                      }
                    >
                      <div className="question-title-area">
                        <span className="question-number">Q{idx + 1}</span>
                        <span className="question-text">
                          {question?.question || 'Question not found'}
                        </span>
                      </div>
                      <div className="question-result">
                        {isCorrect ? (
                          <FaCheckCircle className="icon-correct" title="Correct" />
                        ) : (
                          <FaTimesCircle className="icon-incorrect" title="Incorrect" />
                        )}
                        <span className="chevron">{isExpanded ? '▼' : '▶'}</span>
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="question-details">
                        <div className="detail-section">
                          <label>Question:</label>
                          <p>{question?.question}</p>
                        </div>

                        {question?.description && (
                          <div className="detail-section">
                            <label>Description:</label>
                            <p>{question.description}</p>
                          </div>
                        )}

                        {question?.options && (
                          <div className="detail-section">
                            <label>Options:</label>
                            <ul className="options-list">
                              {question.options.map((option, i) => (
                                <li
                                  key={i}
                                  className={`option-item ${
                                    option === userAnswer
                                      ? isCorrect
                                        ? 'selected-correct'
                                        : 'selected-incorrect'
                                      : option === question.correctAnswer
                                      ? 'correct-answer'
                                      : ''
                                  }`}
                                >
                                  <span className="option-marker">
                                    {String.fromCharCode(65 + i)}.
                                  </span>
                                  <span>{option}</span>
                                  {option === userAnswer && (
                                    <span className="user-answer-tag">Your Answer</span>
                                  )}
                                  {option === question.correctAnswer && isCorrect === false && (
                                    <span className="correct-answer-tag">Correct</span>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {question?.explanation && (
                          <div className="detail-section">
                            <label>Explanation:</label>
                            <p className="explanation">{question.explanation}</p>
                          </div>
                        )}

                        <div className="result-badge">
                          {isCorrect ? (
                            <span className="badge-correct">✓ Correct</span>
                          ) : (
                            <span className="badge-incorrect">✗ Incorrect</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="no-answers">No answers recorded</div>
          )}
        </div>

        {/* Footer */}
        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MockDetailsModal;
