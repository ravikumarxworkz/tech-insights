import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaChevronDown,
  FaCode,
  FaJava,
  FaPython,
  FaLaptopCode,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiDotnet, SiSpringboot, SiReact } from "react-icons/si";

const TechHeader = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="tech-header">
      <div className="header-container">
        <Link to="/" className="logo-area">
          <FaCode className="logo-icon" />
          <span className="logo-text">
            Tech<span className="highlight">Insights</span>
          </span>
        </Link>

        <nav className="main-nav">
          <Link to="/topic/java" className="nav-item">
            <FaJava size={18} /> Java
          </Link>
          <Link to="/topic/python" className="nav-item">
            <FaPython size={18} /> Python
          </Link>
          <Link to="/topic/dotnet" className="nav-item">
            <SiDotnet size={18} /> .NET
          </Link>

          <Link to="/topic/github" className="nav-item">
            <FaGithub size={18} /> GitHub
          </Link>
          <Link to="/topic/dsa" className="dropdown-item">
            <FaLaptopCode /> DSA & Algorithms
          </Link>
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
                <Link to="/topic/mysql" className="dropdown-item">
                  <FaDatabase /> MySQL
                </Link>
                <Link to="/topic/springboot" className="dropdown-item">
                  <SiSpringboot /> Spring Boot
                </Link>
                <Link to="/topic/react" className="dropdown-item">
                  <SiReact /> React.js
                </Link>
                <Link to="/topic/tips" className="dropdown-item">
                  💡 Developer Tips
                </Link>
              </div>
            )}
          </div>
        </nav>

        <a href="https://ravikumarxworkz.github.io/" className="portfolio-btn">
          Back to Portfolio
        </a>
      </div>
    </header>
  );
};

export default TechHeader;
