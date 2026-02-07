// src/components/Header.jsx

import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaChevronDown,
  FaCode,
  FaJava,
  FaPython,
  FaLaptopCode,
  FaGithub,
  FaDatabase,
  FaProjectDiagram,
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaSignInAlt,
  FaShieldAlt
} from "react-icons/fa";
import { SiDotnet, SiSpringboot, SiReact } from "react-icons/si";
import { useAuth } from "../contexts/AuthContext";
import AuthModal from "./MockInterview/AuthModal";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setUserMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const userMenuRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isTopicActive = (topic) => {
    return location.pathname === `/topic/${topic}`;
  };

  // Close user menu when clicking outside or pressing Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setUserMenuOpen(false);
      }
    };

    const handleKey = (e) => {
      if (e.key === 'Escape') setUserMenuOpen(false);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <header className="tech-header">
      <div className="header-container">
        {/* Logo */}
        <Link to="/" className="logo-area">
          <FaCode className="logo-icon" />
          <span className="logo-text">
            Tech<span className="highlight">Insights</span>
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
      
        {/* Main Navigation */}
        <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link 
            to="/topic/java" 
            className={`nav-item ${isTopicActive('java') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaJava size={18} /> Java
          </Link>
          
          <Link 
            to="/topic/python" 
            className={`nav-item ${isTopicActive('python') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaPython size={18} /> Python
          </Link>
          
          <Link 
            to="/topic/dotnet" 
            className={`nav-item ${isTopicActive('dotnet') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <SiDotnet size={18} /> .NET
          </Link>

          {/* Projects Link */}
          <Link 
            to="/projects" 
            className={`nav-item ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaProjectDiagram size={18} /> Projects
          </Link>

          {/* Mock Interviews Link - HIGHLIGHTED */}
          <Link 
            to="/mock-interview" 
            className={`nav-item mock-interview-btn ${isActive('/mock-interview') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            title="Take full-length mock interviews to prepare for coding interviews"
          >
            🎯 Mock Interviews
          </Link>

          {/* Leaderboard Link */}
          <Link 
            to="/leaderboard" 
            className={`nav-item ${isActive('/leaderboard') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            title="View leaderboards and rankings"
          >
            🏆 Leaderboard
          </Link>

          <Link 
            to="/topic/github" 
            className={`nav-item ${isTopicActive('github') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaGithub size={18} /> GitHub
          </Link>
          
          <Link 
            to="/topic/dsa" 
            className={`nav-item ${isTopicActive('dsa') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaLaptopCode size={18} /> DSA
          </Link>
          
          {/* More Dropdown */}
          <div
            className="nav-item dropdown-trigger"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span>
              More <FaChevronDown size={12} style={{ marginLeft: 5 }} />
            </span>

            {isDropdownOpen && (
              <div className="dropdown-menu">
                <Link 
                  to="/topic/mysql" 
                  className="dropdown-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaDatabase /> MySQL
                </Link>
                <Link 
                  to="/topic/springboot" 
                  className="dropdown-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SiSpringboot /> Spring Boot
                </Link>
                <Link 
                  to="/topic/react" 
                  className="dropdown-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <SiReact /> React.js
                </Link>
                <Link 
                  to="/topic/tips" 
                  className="dropdown-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  💡 Developer Tips
                </Link>
              </div>
            )}
          </div>
        </nav>

          {/* Portfolio Button & User Profile */}
        <div className="header-right" ref={userMenuRef}>
          {/* hide portfolio button while user menu open to avoid overlap */}
          {/* User Profile Menu (toggle on click, close on outside click) */}
          {user ? (
            <div className="user-profile-menu">
              <button
                className="user-profile-btn"
                onClick={() => setUserMenuOpen(prev => !prev)}
                aria-expanded={isUserMenuOpen}
                aria-haspopup="true"
              >
                <FaUser size={18} />
                <span className="user-name">{user.displayName || user.email?.split('@')[0] || 'User'}</span>
              </button>

              {isUserMenuOpen && (
                <div className="user-dropdown">
                  <Link to="/dashboard" className="dropdown-item" onClick={() => setUserMenuOpen(false)}>
                    <FaUser /> Dashboard
                  </Link>
                  {user?.role === 'admin' && (
                    <Link to="/admin" className="dropdown-item admin-link" onClick={() => setUserMenuOpen(false)}>
                      <FaShieldAlt /> Admin Panel
                    </Link>
                  )}
                  <button 
                    className="dropdown-item logout-btn"
                    onClick={async () => {
                      try {
                        await logout();
                      } catch (e) {
                        console.error('Logout failed', e);
                      }
                      setUserMenuOpen(false);
                      navigate('/');
                    }}
                  >
                    <FaSignOutAlt /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button 
              className="signin-btn"
              onClick={() => setShowAuthModal(true)}
              title="Sign in or create an account"
            >
              <FaSignInAlt size={16} /> Sign In
            </button>
          )}
        </div>
      </div>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal
          onClose={() => setShowAuthModal(false)}
          onSuccess={() => setShowAuthModal(false)}
        />
      )}
    </header>
  );
};

export default Header;