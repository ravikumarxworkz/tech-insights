import React from 'react';
import { Route } from 'react-router-dom';
import { MockInterviewProvider } from '../contexts/MockInterviewContext';

// Mock Interview Pages
import MockInterviewHome from '../pages/MockInterview/MockInterviewHome';
import DomainPage from '../pages/MockInterview/DomainPage';
import MockInterviewTest from '../pages/MockInterview/MockInterviewTest';
import ResultsPage from '../pages/MockInterview/ResultsPage';
import DashboardPage from '../pages/MockInterview/DashboardPage';
import LeaderboardPage from '../pages/MockInterview/LeaderboardPage';

// Admin Pages
import AdminPanel from '../pages/Admin/AdminPanel';

/**
 * MOCK INTERVIEW ROUTES
 * Add these to your main App.js routing setup
 */
// Export Route elements (to be used as children of the app's <Routes>)
export const mockInterviewRouteElements = (
  <>
    {/* Public Routes */}
    <Route path="/mock-interview" element={<MockInterviewHome />} />
    <Route path="/mock-interview/:domain" element={<DomainPage />} />
    <Route path="/mock-interview/:domain/:setType/test" element={<MockInterviewTest />} />
    <Route path="/mock-interview/results/:attemptId" element={<ResultsPage />} />

    {/* Leaderboards - Public */}
    <Route path="/leaderboard" element={<LeaderboardPage />} />
    <Route path="/leaderboard/:domain" element={<LeaderboardPage />} />

    {/* Dashboard - Private (requires authentication) */}
    <Route path="/dashboard" element={<DashboardPage />} />

    {/* Admin Panel - Private (requires admin access) */}
    <Route path="/admin" element={<AdminPanel />} />
  </>
);

/**
 * INTEGRATION IN APP.JS:
 * 
 * import { mockInterviewRoutes } from './routes/mockInterviewRoutes';
 * 
 * function App() {
 *   return (
 *     <Router>
 *       <Routes>
 *         {all existing routes}
 *         {mockInterviewRoutes}
 *       </Routes>
 *     </Router>
 *   );
 * }
 */
