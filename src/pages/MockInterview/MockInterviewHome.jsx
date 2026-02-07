import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaJava, FaPython, FaDatabase } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import './MockInterview.css';

/**
 * MOCK INTERVIEW HOME PAGE
 * Shows domain selection cards
 */
const MockInterviewHome = () => {
  const domains = [
    {
      id: 'java',
      title: 'Java',
      icon: <FaJava />,
      color: '#f89820',
      description: 'Core Java, OOP, Collections',
      questionCount: 386,
    },
    {
      id: 'python',
      title: 'Python',
      icon: <FaPython />,
      color: '#3776ab',
      description: 'Python basics, scripting & data structures',
      questionCount: 0,
    },
    {
      id: 'mysql',
      title: 'MySQL / SQL',
      icon: <FaDatabase />,
      color: '#00758f',
      description: 'SQL queries, joins, normalization',
      questionCount: 0,
    },
    {
      id: 'dotnet',
      title: '.NET & C#',
      icon: <SiDotnet />,
      color: '#512bd4',
      description: 'ASP.NET Core, LINQ & backend',
      questionCount: 0,
    },
    {
      id: 'dsa',
      title: 'DSA & Coding',
      icon: <FaCode />,
      color: '#ff6b6b',
      description: 'Patterns, arrays, strings & algorithms',
      questionCount: 0,
    },
  ];

  return (
    <main className="mock-interview-home">
      {/* Hero Section */}
      <section className="mock-hero">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mock-hero-content"
        >
          <h1>🎯 Mock Interview Practice</h1>
          <p>Prepare for your dream job with realistic interview simulations</p>
          <div className="mock-stats">
            <div className="stat">
              <span className="stat-number">15</span>
              <span className="stat-label">Questions / Set</span>
            </div>
            <div className="stat">
              <span className="stat-number">30</span>
              <span className="stat-label">Minutes / Test</span>
            </div>
            <div className="stat">
              <span className="stat-number">30</span>
              <span className="stat-label">Points Max</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Domain Selection */}
      <section className="domains-section">
        <div className="section-header">
          <h2>Choose Your Domain</h2>
          <p>Select a domain to start practicing</p>
        </div>

        <div className="domains-grid">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="domain-card"
            >
              <Link to={`/mock-interview/${domain.id}`}>
                <div className="domain-icon" style={{ color: domain.color }}>
                  {domain.icon}
                </div>
                <h3>{domain.title}</h3>
                <p>{domain.description}</p>
                <div className="domain-footer">
                  <span className="question-count">
                    {domain.questionCount > 0 
                      ? `${domain.questionCount} Questions` 
                      : 'Coming Soon'}
                  </span>
                  {domain.questionCount > 0 && <span className="arrow">→</span>}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Leaderboards Section */}
      <section className="leaderboards-section">
        <div className="section-header">
          <h2>🏆 View Leaderboards</h2>
          <p>See where you rank among other developers</p>
        </div>

        <div className="leaderboards-grid">
          <Link to="/leaderboard" className="leaderboard-card overall">
            <div className="lb-icon">🏅</div>
            <h3>Overall Leaderboard</h3>
            <p>Top performers across all domains</p>
            <span className="lb-link">View Leaderboard →</span>
          </Link>

          {domains
            .filter(d => d.questionCount > 0)
            .map(domain => (
              <Link
                key={domain.id}
                to={`/leaderboard/${domain.id}`}
                className="leaderboard-card"
                style={{ borderTopColor: domain.color }}
              >
                <div className="lb-icon">{domain.icon}</div>
                <h3>{domain.title} Leaderboard</h3>
                <p>Top {domain.title} performers</p>
                <span className="lb-link">View Rankings →</span>
              </Link>
            ))}
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h4>Choose Domain</h4>
            <p>Select your preferred domain</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h4>Select Difficulty</h4>
            <p>Pick Easy, Medium, Hard, or Mixed</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h4>Login / Signup</h4>
            <p>Authenticate to save your progress</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h4>Take Test</h4>
            <p>Answer 15 questions in 30 minutes</p>
          </div>
          <div className="step">
            <div className="step-number">5</div>
            <h4>View Results</h4>
            <p>Check score, accuracy & leaderboard rank</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MockInterviewHome;
