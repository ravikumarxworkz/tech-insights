import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useMockInterview } from '../../contexts/MockInterviewContext';
import { calculateScore, calculateAccuracy, scoreToPoints, formatTime } from '../../utils/mockInterviewUtils';
import { saveMockAttempt } from '../../services/mockInterviewService';
import { useAuth } from '../../contexts/AuthContext';
import { javaMockQuestions } from '../../data/topics/java/mockTests';
import './MockInterview.css';

/**
 * FULL-SCREEN MOCK INTERVIEW TEST
 * No navbar, full-screen experience
 */
const MockInterviewTest = () => {
  const { domain, setType } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { mockState, userAnswers, initializeMock, saveAnswer, submitMock, updateRemainingTime } = useMockInterview();
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showWarnModal, setShowWarnModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Initialize mock on mount
  useEffect(() => {
    if (!mockState) {
      // Load questions from topicData
      // This will be imported based on domain
      initializeMock(domain, setType, getQuestionsForDomain(domain));
    }
  }, [domain, setType, mockState, initializeMock]);

  // Timer countdown
  useEffect(() => {
    if (!mockState || !mockState.isActive) return;

    const timer = setInterval(() => {
      updateRemainingTime(mockState.remainingTime - 1);
      
      // Auto-submit when time is up
      if (mockState.remainingTime - 1 <= 0) {
        handleSubmit();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [mockState]);

  // Prevent page exit/refresh
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (mockState?.isActive) {
        e.preventDefault();
        e.returnValue = '';
        return '';
      }
    };

    const handleKeyDown = (e) => {
      // Prevent F5, Ctrl+R, Ctrl+Shift+Delete
      if ((e.key === 'F5') || (e.ctrlKey && e.key === 'r') || (e.ctrlKey && e.shiftKey && e.key === 'Delete')) {
        e.preventDefault();
        setShowWarnModal(true);
        handleSubmit();
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mockState]);

  const handleAnswerSelect = (optionId) => {
    const currentQuestion = mockState.questions[currentQuestionIndex];
    saveAnswer(currentQuestion.id, optionId);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < mockState.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = async () => {
    if (!user) {
      alert('Please login or create an account before submitting the test.');
      return;
    }

    setSubmitting(true);
    
    try {
      const { correctAnswers, score, totalScore } = calculateScore(
        mockState.questions.map(q => userAnswers[q.id] || null),
        mockState.correctAnswerIds
      );

      const accuracy = calculateAccuracy(correctAnswers, mockState.totalQuestions);
      const points = scoreToPoints(score);

      const mockData = {
        domain,
        setType,
        score,
        totalScore,
        correctAnswers,
        accuracy,
        points,
        totalQuestions: mockState.totalQuestions,
        timeTaken: mockState.totalTime - mockState.remainingTime,
        timeStarted: mockState.timeStarted,
        answers: userAnswers,
      };

      // Save to Firebase
      const attemptId = await saveMockAttempt(user.uid, mockData);

      // Store mockData in sessionStorage so Results page can read it
      try {
        const toStore = { ...mockData, attemptId };
        sessionStorage.setItem(`mockAttempt_${attemptId}`, JSON.stringify(toStore));
      } catch (e) {
        console.warn('Failed to store mockData in sessionStorage:', e);
      }

      // Navigate to results
      navigate(`/mock-interview/results/${attemptId}`, {
        state: { mockData },
        replace: true,
      });
    } catch (error) {
      console.error('Error submitting mock:', error);
      alert('Error submitting test. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (!mockState) {
    return <div className="loading">Loading...</div>;
  }

  // If questions are not available, show a friendly message instead of crashing
  if (!mockState.questions || mockState.questions.length === 0) {
    return <div className="loading">No questions available for this domain. Please select a different domain or add questions.</div>;
  }

  const currentQuestion = mockState.questions[currentQuestionIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const selectedAnswer = userAnswers[currentQuestion.id];

  return (
    <div className="mock-test-full-screen">
      {/* Header Bar */}
      <div className="test-header">
        <div className="test-title">
          {domain.toUpperCase()} - {setType.toUpperCase()} SET
        </div>
        <div className="test-progress">
          <span className="progress-text">
            Question {currentQuestionIndex + 1} of {mockState.totalQuestions}
          </span>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestionIndex + 1) / mockState.totalQuestions) * 100}%`,
              }}
            />
          </div>
        </div>
        <div className="test-timer" style={{ color: mockState.remainingTime < 300 ? '#ef4444' : '#3b82f6' }}>
          ⏱️ {formatTime(mockState.remainingTime)}
        </div>
      </div>

      {/* Main Content */}
      <div className="test-content">
        {/* Left Panel - Question */}
        <div className="question-panel">
          <div className="question-card">
            <div className="question-header">
              <h2>{currentQuestion.title}</h2>
              <span className={`difficulty-badge ${currentQuestion.difficulty}`}>
                {currentQuestion.difficulty.toUpperCase()}
              </span>
            </div>

            {currentQuestion.description && (
              <div className="question-description">
                {currentQuestion.description}
              </div>
            )}

            {/* Options */}
            <div className="options-container">
              {currentQuestion.options.map((option, idx) => (
                <div
                  key={idx}
                  className={`option ${selectedAnswer === option.id ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(option.id)}
                >
                  <input
                    type="radio"
                    name="option"
                    checked={selectedAnswer === option.id}
                    onChange={() => handleAnswerSelect(option.id)}
                  />
                  <span className="option-text">{option.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="test-navigation">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="nav-btn"
            >
              ← Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={currentQuestionIndex === mockState.totalQuestions - 1}
              className="nav-btn"
            >
              Next →
            </button>
            <button onClick={handleSubmit} disabled={submitting} className="submit-btn">
              {submitting ? 'Submitting...' : 'Submit Test'}
            </button>
          </div>
        </div>

        {/* Right Panel - Question Navigator */}
        <div className="navigator-panel">
          <div className="navigator-header">
            <h3>Questions</h3>
            <span className="answered-count">{answeredCount}/{mockState.totalQuestions}</span>
          </div>
          <div className="questions-grid">
            {mockState.questions.map((q, idx) => (
              <button
                key={idx}
                className={`question-btn ${idx === currentQuestionIndex ? 'active' : ''} ${userAnswers[q.id] ? 'answered' : ''}`}
                onClick={() => setCurrentQuestionIndex(idx)}
              >
                {idx + 1}
              </button>
            ))}
          </div>

          {/* Legend */}
          <div className="legend">
            <div className="legend-item">
              <div className="legend-color answered"></div>
              <span>Answered</span>
            </div>
            <div className="legend-item">
              <div className="legend-color active"></div>
              <span>Current</span>
            </div>
          </div>
        </div>
      </div>

      {/* Warning Modal */}
      {showWarnModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Test Auto-Submitted</h3>
            <p>Your test was automatically submitted due to page exit/refresh.</p>
            <p>Waiting for results...</p>
          </div>
        </div>
      )}
    </div>
  );
};

// Helper function to get questions by domain
const getQuestionsForDomain = (domain) => {
  // Currently supports 'java' mock questions added under data/topics/java/mockTests
  if (!domain) return [];
  const key = domain.toLowerCase();
  if (key === 'java' && javaMockQuestions) {
    // Flatten pages into a single questions array
    return javaMockQuestions.pages.flatMap(p => p.questions || []);
  }

  // Fallback: no questions available for given domain
  return [];
};

export default MockInterviewTest;
