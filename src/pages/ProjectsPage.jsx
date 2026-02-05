// src/pages/ProjectsPage.jsx

import React, { useState, useEffect } from 'react';
import { 
  FaJava, 
  FaPython, 
  FaReact, 
  FaHtml5, 
  FaGithub, 
  FaExternalLinkAlt, 
  FaYoutube,
  FaStar,
  FaCodeBranch,
  FaSearch,
  FaFilter,
  FaCode
} from 'react-icons/fa';
import { SiDotnet, SiAngular } from 'react-icons/si';
import { 
  featuredProjects, 
  categories, 
  complexityLevels,
  getAllProjects,
  getGitHubStats,
  GITHUB_USERNAME 
} from '../data/projectsData';
import '../styles/projects.css';

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [githubStats, setGithubStats] = useState(null);
  const [showOnlyFeatured, setShowOnlyFeatured] = useState(false);

  // Load projects and stats on mount
  useEffect(() => {
    loadData();
  }, []);

  // Filter projects when category, search, or featured filter changes
  useEffect(() => {
    filterProjects();
  }, [activeCategory, searchQuery, allProjects, showOnlyFeatured]);

  const loadData = async () => {
    setLoading(true);
    try {
      const [projects, stats] = await Promise.all([
        getAllProjects(),
        getGitHubStats()
      ]);
      setAllProjects(projects);
      setGithubStats(stats);
    } catch (error) {
      console.error('Error loading project data:', error);
      // Fallback to featured projects only
      setAllProjects(featuredProjects);
    } finally {
      setLoading(false);
    }
  };

  const filterProjects = () => {
    let filtered = allProjects;

    // Featured filter
    if (showOnlyFeatured) {
      filtered = filtered.filter(p => p.featured);
    }

    // Category filter
    if (activeCategory !== 'All') {
      filtered = filtered.filter(project => 
        project.category === activeCategory ||
        (project.technologies && project.technologies.some(tech => 
          tech.toLowerCase().includes(activeCategory.toLowerCase())
        ))
      );
    }

    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        (project.technologies && project.technologies.some(tech => 
          tech.toLowerCase().includes(query)
        ))
      );
    }

    setFilteredProjects(filtered);
  };

  const getCategoryIcon = (categoryName) => {
    const iconMap = {
      'All': FaCode,
      'Java': FaJava,
      'Python': FaPython,
      'React JS': FaReact,
      'Angular': SiAngular,
      'HTML/CSS/JS': FaHtml5,
      '.NET': SiDotnet
    };
    return iconMap[categoryName] || FaCode;
  };

  const getGithubUrl = (project) => {
    if (project.htmlUrl) return project.htmlUrl;
    if (project.subPath) {
      return `https://github.com/${GITHUB_USERNAME}/${project.repoName}/tree/main/${project.subPath}`;
    }
    return `https://github.com/${GITHUB_USERNAME}/${project.repoName}`;
  };

  return (
    <div className="projects-page">
      {/* Hero Section with Stats */}
      <section className="projects-hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="display-4 fw-bold mb-3">
              <span className="text-gradient">Project</span> Showcase
            </h1>
            <p className="lead text-muted mb-4">
              Explore my technical projects across different technology stacks
            </p>
            
            {/* GitHub Stats */}
            {githubStats && (
              <div className="github-stats">
                <a 
                  href={githubStats.profileUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="stat-item"
                >
                  <FaGithub size={24} />
                  <div>
                    <div className="stat-value">{githubStats.publicRepos}</div>
                    <div className="stat-label">Repositories</div>
                  </div>
                </a>
                <div className="stat-item">
                  <FaStar size={24} />
                  <div>
                    <div className="stat-value">{githubStats.totalStars}</div>
                    <div className="stat-label">Total Stars</div>
                  </div>
                </div>
                <div className="stat-item">
                  <FaCodeBranch size={24} />
                  <div>
                    <div className="stat-value">{githubStats.totalForks}</div>
                    <div className="stat-label">Total Forks</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container">
        {/* Search and Filter Section */}
        <div className="filters-section">
          {/* Search Bar */}
          <div className="search-bar">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search projects by name, technology, or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Filter Toggle */}
          <div className="filter-toggle">
            <button
              className={`toggle-btn ${showOnlyFeatured ? 'active' : ''}`}
              onClick={() => setShowOnlyFeatured(!showOnlyFeatured)}
            >
              <FaFilter className="me-2" />
              {showOnlyFeatured ? 'Show All' : 'Featured Only'}
            </button>
          </div>

          {/* Category Filter */}
          <div className="category-filters">
            {categories.map((cat) => {
              const IconComponent = getCategoryIcon(cat.name);
              return (
                <button
                  key={cat.name}
                  className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.name)}
                  style={{
                    '--category-color': cat.color
                  }}
                >
                  <IconComponent className="me-2" />
                  {cat.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <p>
            Showing <strong>{filteredProjects.length}</strong> project{filteredProjects.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Projects Grid */}
        {loading ? (
          <div className="loading-state">
            <div className="spinner"></div>
            <p>Loading projects...</p>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="empty-state">
            <FaSearch size={48} />
            <h3>No projects found</h3>
            <p>Try adjusting your filters or search query</p>
            <button 
              className="btn btn-primary"
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
                setShowOnlyFeatured(false);
              }}
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`project-card ${project.featured ? 'featured' : ''}`}>
      {project.featured && (
        <div className="featured-badge">
          <FaStar /> Featured
        </div>
      )}

      {/* Header */}
      <div className="card-header">
        <div className="project-icon">
          {project.category === 'Java' && <FaJava />}
          {project.category === 'Python' && <FaPython />}
          {project.category === 'React JS' && <FaReact />}
          {project.category === 'HTML/CSS/JS' && <FaHtml5 />}
          {project.category === '.NET' && <SiDotnet />}
          {project.category === 'Angular' && <SiAngular />}
        </div>
        <div className="project-meta">
          <span className="category-badge">{project.category}</span>
          {project.complexity && (
            <span 
              className="complexity-badge"
              style={{ 
                backgroundColor: complexityLevels[project.complexity].color 
              }}
            >
              {complexityLevels[project.complexity].label}
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="card-body">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">
          {isExpanded ? project.fullDescription || project.description : project.description}
        </p>

        {/* Features (for expanded view) */}
        {isExpanded && project.features && (
          <div className="project-features">
            <h4>Key Features:</h4>
            <ul>
              {project.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        <div className="tech-stack">
          {project.technologies && project.technologies.map((tech, idx) => (
            <span key={idx} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* GitHub Stats (if available) */}
        {project.fromGitHub && (
          <div className="github-info">
            {project.stars > 0 && (
              <span className="stat">
                <FaStar /> {project.stars}
              </span>
            )}
            {project.forks > 0 && (
              <span className="stat">
                <FaCodeBranch /> {project.forks}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="card-footer">
        <div className="action-buttons">
          {project.demoUrl && (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          )}
          {project.youtubeUrl && (
            <a 
              href={project.youtubeUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-youtube"
            >
              <FaYoutube /> Watch Demo
            </a>
          )}
          <a 
            href={getGithubUrl(project)} 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-github"
          >
            <FaGithub /> View Code
          </a>
        </div>
        
        {(project.fullDescription || project.features) && (
          <button 
            className="btn btn-text"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? 'Show Less' : 'Learn More'} →
          </button>
        )}
      </div>
    </div>
  );
};

const getGithubUrl = (project) => {
  if (project.htmlUrl) return project.htmlUrl;
  if (project.subPath) {
    return `https://github.com/${GITHUB_USERNAME}/${project.repoName}/tree/main/${project.subPath}`;
  }
  return `https://github.com/${GITHUB_USERNAME}/${project.repoName}`;
};

export default ProjectsPage;