// ========================
// QUESTION SELECTION & SHUFFLING
// ========================

/**
 * Shuffle array using Fisher-Yates algorithm
 */
export const shuffleArray = (array) => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

/**
 * Get questions by difficulty level
 */
export const getQuestionsByDifficulty = (allQuestions, difficulty, count) => {
  const filtered = allQuestions.filter(q => q.difficulty === difficulty);
  return shuffleArray(filtered).slice(0, count);
};

/**
 * Generate mock set based on type
 */
export const generateMockSet = (allQuestions, setType = 'easy', totalQuestions = 15) => {
  let selectedQuestions = [];

  switch (setType) {
    case 'easy':
      selectedQuestions = getQuestionsByDifficulty(allQuestions, 'easy', totalQuestions);
      break;
    case 'medium':
      selectedQuestions = getQuestionsByDifficulty(allQuestions, 'medium', totalQuestions);
      break;
    case 'hard':
      selectedQuestions = getQuestionsByDifficulty(allQuestions, 'hard', totalQuestions);
      break;
    case 'mixed':
      selectedQuestions = [
        ...getQuestionsByDifficulty(allQuestions, 'easy', 5),
        ...getQuestionsByDifficulty(allQuestions, 'medium', 5),
        ...getQuestionsByDifficulty(allQuestions, 'hard', 5),
      ];
      break;
    default:
      selectedQuestions = shuffleArray(allQuestions).slice(0, totalQuestions);
  }

  // Shuffle options and prepare for frontend
  return selectedQuestions.map(q => ({
    id: q.id,
    title: q.title,
    description: q.description || '',
    difficulty: q.difficulty,
    options: shuffleArray([...q.options]), // Shuffle options
    correctAnswerId: q.correctAnswerId, // Keep for validation
    explanation: q.explanation || '', // For result review
  }));
};

// ========================
// SCORING & POINTS CALCULATION
// ========================

/**
 * Convert score to leaderboard points
 * Score = 26–30 → 30 points
 * Score = 21–25 → 25 points
 * Score = 16–20 → 20 points
 * Score = 11–15 → 15 points
 * Score = ≤10   → 10 points
 */
export const scoreToPoints = (score) => {
  if (score >= 26) return 30;
  if (score >= 21) return 25;
  if (score >= 16) return 20;
  if (score >= 11) return 15;
  return 10;
};

/**
 * Calculate accuracy percentage
 */
export const calculateAccuracy = (correctAnswers, totalQuestions) => {
  return Math.round((correctAnswers / totalQuestions) * 100);
};

/**
 * Calculate score from answers
 * Each correct answer = 2 marks
 */
export const calculateScore = (userAnswers, correctAnswers) => {
  let correct = 0;
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      correct++;
    }
  });
  return {
    correctAnswers: correct,
    score: correct * 2, // 2 marks per question
    totalScore: correctAnswers.length * 2,
  };
};

// ========================
// TIME UTILITIES
// ========================

/**
 * Format seconds to MM:SS
 */
export const formatTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

/**
 * Convert seconds to readable format (e.g., "5 minutes 30 seconds")
 */
export const formatTimeReadable = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  
  if (mins === 0) return `${secs} seconds`;
  if (secs === 0) return `${mins} minute${mins > 1 ? 's' : ''}`;
  
  return `${mins} minute${mins > 1 ? 's' : ''} ${secs} second${secs > 1 ? 's' : ''}`;
};

/**
 * Check if time is up
 */
export const isTimeUp = (seconds) => seconds <= 0;

// ========================
// MOCK INTERVIEW STATE
// ========================

/**
 * Prepare mock state for submission
 */
export const prepareMockSubmission = (mockState, userAnswers) => {
  const { correctAnswers, score, totalScore } = calculateScore(
    userAnswers,
    mockState.correctAnswerIds
  );

  const accuracy = calculateAccuracy(correctAnswers, mockState.totalQuestions);
  const points = scoreToPoints(score);

  return {
    domain: mockState.domain,
    setType: mockState.setType,
    score,
    totalScore,
    correctAnswers,
    accuracy,
    points,
    totalQuestions: mockState.totalQuestions,
    timeTaken: mockState.totalTime - mockState.remainingTime,
    timeStarted: mockState.timeStarted,
    userAnswers,
    questions: mockState.questions,
  };
};

// ========================
// VALIDATION
// ========================

/**
 * Validate mock questions structure
 */
export const validateQuestionStructure = (questions) => {
  return questions.every(q => 
    q.id && 
    q.title && 
    q.options && 
    q.options.length >= 4 &&
    q.correctAnswerId &&
    q.difficulty
  );
};
