import React, { createContext, useContext, useState, useCallback } from 'react';
import { generateMockSet } from '../utils/mockInterviewUtils';

const MockInterviewContext = createContext();

export const MockInterviewProvider = ({ children }) => {
  const [mockState, setMockState] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});

  // ========================
  // INITIALIZE MOCK INTERVIEW
  // ========================
  const initializeMock = useCallback((domain, setType, questions) => {
    const mockQuestions = generateMockSet(questions, setType, 15);
    const correctAnswerIds = mockQuestions.map(q => q.correctAnswerId);

    const newMockState = {
      domain,
      setType,
      questions: mockQuestions,
      correctAnswerIds,
      totalQuestions: mockQuestions.length,
      totalTime: 30 * 60, // 30 minutes in seconds
      remainingTime: 30 * 60,
      timeStarted: new Date(),
      isActive: true,
      isSubmitted: false,
    };

    setMockState(newMockState);
    setUserAnswers({});
    return newMockState;
  }, []);

  // ========================
  // UPDATE REMAINING TIME
  // ========================
  const updateRemainingTime = useCallback((newTime) => {
    setMockState(prev => ({
      ...prev,
      remainingTime: newTime,
    }));
  }, []);

  // ========================
  // SAVE USER ANSWER
  // ========================
  const saveAnswer = useCallback((questionId, selectedOptionId) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: selectedOptionId,
    }));
  }, []);

  // ========================
  // SUBMIT MOCK
  // ========================
  const submitMock = useCallback(() => {
    setMockState(prev => ({
      ...prev,
      isActive: false,
      isSubmitted: true,
    }));
  }, []);

  // ========================
  // EXIT MOCK (AUTO-SUBMIT)
  // ========================
  const exitMock = useCallback(() => {
    setMockState(prev => ({
      ...prev,
      isActive: false,
      isSubmitted: true,
    }));
  }, []);

  // ========================
  // RESET MOCK
  // ========================
  const resetMock = useCallback(() => {
    setMockState(null);
    setUserAnswers({});
  }, []);

  // ========================
  // GET ANSWERED COUNT
  // ========================
  const getAnsweredCount = useCallback(() => {
    return Object.keys(userAnswers).length;
  }, [userAnswers]);

  const value = {
    mockState,
    userAnswers,
    initializeMock,
    updateRemainingTime,
    saveAnswer,
    submitMock,
    exitMock,
    resetMock,
    getAnsweredCount,
  };

  return (
    <MockInterviewContext.Provider value={value}>
      {children}
    </MockInterviewContext.Provider>
  );
};

export const useMockInterview = () => {
  const context = useContext(MockInterviewContext);
  if (!context) {
    throw new Error('useMockInterview must be used within MockInterviewProvider');
  }
  return context;
};
