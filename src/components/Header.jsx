// src/components/Header.jsx

import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
  FaTimes
} from "react-icons/fa";
import { SiDotnet, SiSpringboot, SiReact } from "react-icons/si";

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isTopicActive = (topic) => {
    return location.pathname === `/topic/${topic}`;
  };

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

          {/* Projects Link - NEW */}
          <Link 
            to="/projects" 
            className={`nav-item ${isActive('/projects') ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaProjectDiagram size={18} /> Projects
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

        {/* Portfolio Button */}
        <a 
          href="https://ravikumarxworkz.github.io/" 
          className="portfolio-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back to Portfolio
        </a>
      </div>
    </header>
  );
};

export default Header;