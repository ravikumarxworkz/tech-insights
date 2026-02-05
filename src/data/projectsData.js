// src/data/projectsData.js

/**
 * Projects Data Configuration
 * Combines GitHub repos with manual project details
 */

export const GITHUB_USERNAME = 'ravikumarxworkz';

// Repos to exclude from automatic fetching (config files, forks, etc.)
export const EXCLUDED_REPOS = [
  'ravikumarxworkz', // Config repo
  'Tech Insights', // Already manually added below
  'tech-insights', // Already manually added below
  'My_resume', // Resume repo
  'Overleaf Resume Code',
  'hrx-website-clone', // Resume code
  // Add any other repos you want to exclude
];

// Manual repo overrides - for repos that need custom category/info
export const REPO_OVERRIDES = {
  'tech-insights': {
    category: 'React JS',
    description: 'Modern tech blog platform built with React.js featuring topic-based navigation, blog posts, and project showcase.',
    technologies: ['React', 'React Router', 'CSS3', 'GitHub Pages']
  },
  'ravikumarxworkz.github.io': {
    category: 'HTML/CSS/JS',
    description: 'Professional portfolio website showcasing projects, skills, and experience.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap']
  },
  'JavaDemo': {
    category: 'Java',
    description: 'Java programming demonstrations and practice code.',
    technologies: ['Java', 'Core Java']
  },
  'Pythonprogram': {
    category: 'Python',
    description: 'Python programming examples and practice scripts.',
    technologies: ['Python', 'Python 3']
  },
  'Hrx Website Clone': {
    category: 'HTML/CSS/JS',
    description: 'Clone of HRX website built with HTML and CSS.',
    technologies: ['HTML5', 'CSS3']
  }
};

// Featured projects with complete details
export const featuredProjects = [
  {
    id: 1,
    title: "Hospital Management System",
    category: "Java",
    description: "A comprehensive system built with Spring Boot and React for managing hospital operations, patient appointments, and doctor scheduling.",
    fullDescription: `
      LifeBridgeHospital is a robust web application designed to streamline hospital operations, 
      improve patient care, and optimize resource management. Features include Patient Management, 
      Doctor Scheduling, Administrative Control, and Billing systems.
    `,
    repoName: "hospital-management-system",
    technologies: ["Spring Boot", "React", "MySQL", "Material-UI", "JWT", "Axios"],
    features: [
      "Patient registration and profile management",
      "Appointment booking with doctor selection",
      "Doctor scheduling and availability management",
      "Administrative dashboard with real-time insights",
      "Automated billing and invoice generation"
    ],
    demoUrl: null,
    youtubeUrl: null,
    featured: true,
    complexity: "advanced",
    status: "completed"
  },
  {
    id: 2,
    title: "Complaint Management System",
    category: "Java",
    description: "Full-featured complaint tracking system with four modules: User, Admin, Department, and Employee.",
    fullDescription: `
      ResolveX is a comprehensive web application designed to streamline complaint handling 
      across various sectors with user registration, OTP verification, and secure processes.
    `,
    repoName: "CompliantManagementSystem-spring-mvc",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Maven"],
    features: [
      "User registration with email validation and OTP",
      "Complaint lodging and real-time tracking",
      "Department-wise complaint assignment",
      "OTP-based complaint closure",
      "Admin dashboard with statistics"
    ],
    demoUrl: null,
    youtubeUrl: "https://youtu.be/eBL6rs-E9Ho",
    featured: true,
    complexity: "advanced",
    status: "completed"
  },
  {
    id: 3,
    title: "Vendor Management System",
    category: "Java",
    description: "Enterprise-grade system for managing vendors, orders, invoices, and payments with automated notifications.",
    fullDescription: `
      Comprehensive Vendor Management System with secure registration, real-time notifications, 
      and end-to-end order and payment management.
    `,
    repoName: "VendorManagementSystem-springboot",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "Maven"],
    features: [
      "Secure user registration with OTP verification",
      "Real-time email notifications",
      "Order and invoice management",
      "Admin interface for vendor approval",
      "Automated payment reports"
    ],
    demoUrl: null,
    youtubeUrl: "https://youtu.be/UaY6fh-_nQ4",
    featured: true,
    complexity: "advanced",
    status: "completed"
  },
  {
    id: 4,
    title: "Women Security App",
    category: "Java",
    description: "Safety platform with incident tracking, user authentication, and complaint registration system.",
    repoName: "ProjectNuggets",
    subPath: "WomenSecurityApp",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Incident tracking and reporting",
      "User registration and authentication",
      "Safety tips and resources",
      "Complaint registration system",
      "Admin dashboard"
    ],
    demoUrl: null,
    youtubeUrl: null,
    featured: false,
    complexity: "intermediate",
    status: "completed"
  },
  {
    id: 5,
    title: "Scientific Calculator",
    category: "HTML/CSS/JS",
    description: "Advanced calculator with scientific functions built with vanilla JavaScript.",
    repoName: "ProjectNuggets",
    subPath: "Calculater",
    technologies: ["HTML5", "CSS3", "JavaScript"],
    features: [
      "Basic arithmetic operations",
      "Scientific functions",
      "Responsive design",
      "Keyboard support"
    ],
    demoUrl: "https://ravikumarxworkz.github.io/assets/projects/calculator/calculator.html",
    youtubeUrl: null,
    featured: false,
    complexity: "beginner",
    status: "completed"
  },
  {
    id: 6,
    title: "Voter Registration WebApp",
    category: "Java",
    description: "Web application for streamlining voter ID card application process with validation and PDF generation.",
    repoName: "ProjectNuggets",
    subPath: "VoterIdApplication",
    technologies: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      "Form validation for all fields",
      "Aadhar card uniqueness validation",
      "Application preview before submission",
      "PDF download functionality",
      "Database integration"
    ],
    demoUrl: null,
    youtubeUrl: null,
    featured: false,
    complexity: "intermediate",
    status: "completed"
  },
  {
    id: 7,
    title: "Register-Login System",
    category: "HTML/CSS/JS",
    description: "User authentication system with localStorage and sessionStorage for profile management.",
    repoName: "ravikumarxworkz.github.io",
    subPath: "assets/projects/login",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "SessionStorage"],
    features: [
      "User registration and validation",
      "Login with credential verification",
      "Profile dashboard with edit functionality",
      "Session management",
      "Responsive design"
    ],
    demoUrl: "https://ravikumarxworkz.github.io/assets/projects/login/index.html",
    youtubeUrl: "https://youtu.be/vfTrwr7Xtsc",
    featured: false,
    complexity: "beginner",
    status: "completed"
  },
  {
    id: 8,
    title: "Tech Insights",
    category: "React JS",
    description: "Modern tech blog and learning platform built with React.js, featuring topic-based navigation, blog posts, and comprehensive project showcase.",
    fullDescription: `
      Tech Insights is a modern web platform designed for sharing technical knowledge, tutorials, and project showcases. 
      Built with React.js and React Router, it features a clean, dark-themed UI with smooth navigation and responsive design.
    `,
    repoName: "tech-insights",
    technologies: ["React", "React Router", "CSS3", "JavaScript", "GitHub Pages"],
    features: [
      "Topic-based navigation (Java, Python, .NET, etc.)",
      "Blog post system with rich content",
      "Project showcase with GitHub integration",
      "Responsive dark theme design",
      "GitHub Pages deployment"
    ],
    demoUrl: "https://ravikumarxworkz.github.io/tech-insights/",
    youtubeUrl: null,
    featured: true,
    complexity: "intermediate",
    status: "completed"
  },

  {
  id: 9,
  title: "HRX Brand Homepage Clone",
  category: "HTML/CSS/JS",
  description: "Pixel-perfect clone of HRX (Hrithik Roshan's fitness brand) homepage, showcasing modern e-commerce UI/UX with pure HTML, CSS, and JavaScript.",
  fullDescription: `
    A complete frontend clone of the HRX Brands homepage, recreating the sleek and modern design of Hrithik Roshan's 
    fitness and lifestyle brand. Built entirely with vanilla HTML, CSS, and JavaScript, this project demonstrates 
    advanced styling techniques, responsive design principles, and interactive UI components without any frameworks.
  `,
  repoName: "hrx-website-clone",
  technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "GitHub Pages"],
  features: [
    "Pixel-perfect recreation of HRX brand homepage",
    "Fully responsive design for all devices",
    "Interactive navigation and product showcases",
    "Smooth animations and transitions",
    "Clean, modern UI with attention to detail",
    "Cross-browser compatible"
  ],
  demoUrl: "https://ravikumarxworkz.github.io/hrx-website-clone/",
  youtubeUrl: null,
  featured: true,
  complexity: "intermediate",
  status: "completed"
}
];

// Category configuration
export const categories = [
  { name: 'All', icon: 'FaCode', color: '#007bff' },
  { name: 'Java', icon: 'FaJava', color: '#f89820' },
  { name: 'Python', icon: 'FaPython', color: '#3776ab' },
  { name: 'React JS', icon: 'FaReact', color: '#61dafb' },
  { name: 'Angular', icon: 'SiAngular', color: '#dd0031' },
  { name: 'HTML/CSS/JS', icon: 'FaHtml5', color: '#e34c26' },
  { name: '.NET', icon: 'SiDotnet', color: '#512bd4' }
  // Note: Repos without a matching category are automatically filtered out
];

// Complexity levels
export const complexityLevels = {
  beginner: { label: 'Beginner', color: '#28a745' },
  intermediate: { label: 'Intermediate', color: '#ffc107' },
  advanced: { label: 'Advanced', color: '#dc3545' }
};

/**
 * Fetch GitHub repositories
 */
export async function fetchGitHubRepos() {
  try {
    const response = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    
    const repos = await response.json();
    
    // Helper function to detect category from repo
    const detectCategory = (repo) => {
      const name = repo.name.toLowerCase();
      const desc = (repo.description || '').toLowerCase();
      const language = repo.language || '';
      
      // Check for manual override first
      if (REPO_OVERRIDES[repo.name]) {
        return REPO_OVERRIDES[repo.name].category;
      }
      
      // React projects
      if (language === 'JavaScript' || language === 'TypeScript') {
        if (name.includes('react') || desc.includes('react')) return 'React JS';
        if (name.includes('angular') || desc.includes('angular')) return 'Angular';
        if (name.includes('website') || name.includes('portfolio') || desc.includes('website')) {
          return 'HTML/CSS/JS';
        }
        return 'HTML/CSS/JS';
      }
      
      // Java projects
      if (language === 'Java' || name.includes('java') || desc.includes('java')) {
        return 'Java';
      }
      
      // Python projects
      if (language === 'Python' || name.includes('python') || desc.includes('python')) {
        return 'Python';
      }
      
      // .NET projects
      if (language === 'C#' || name.includes('dotnet') || desc.includes('.net')) {
        return '.NET';
      }
      
      // HTML/CSS projects
      if (language === 'HTML' || language === 'CSS') {
        return 'HTML/CSS/JS';
      }
      
      // Default
      return 'Other';
    };
    
    // Helper function to get technologies
    const getTechnologies = (repo) => {
      // Check for manual override
      if (REPO_OVERRIDES[repo.name]) {
        return REPO_OVERRIDES[repo.name].technologies;
      }
      
      const techs = [];
      if (repo.language) techs.push(repo.language);
      
      const name = repo.name.toLowerCase();
      const desc = (repo.description || '').toLowerCase();
      
      // Add common frameworks/tools
      if (name.includes('spring') || desc.includes('spring')) techs.push('Spring Boot');
      if (name.includes('react') || desc.includes('react')) techs.push('React');
      if (name.includes('angular') || desc.includes('angular')) techs.push('Angular');
      if (name.includes('mysql') || desc.includes('mysql')) techs.push('MySQL');
      if (desc.includes('bootstrap')) techs.push('Bootstrap');
      
      return techs.length > 0 ? techs : [repo.language || 'Miscellaneous'];
    };
    
    // Helper function to get description
    const getDescription = (repo) => {
      // Check for manual override
      if (REPO_OVERRIDES[repo.name]) {
        return REPO_OVERRIDES[repo.name].description;
      }
      
      return repo.description || `Repository: ${repo.name.replace(/-/g, ' ')}`;
    };
    
    // Filter and map repos
    return repos
      .filter(repo => {
        // Exclude forks
        if (repo.fork) return false;
        
        // Exclude archived repos
        if (repo.archived) return false;
        
        // Exclude repos in exclusion list
        if (EXCLUDED_REPOS.includes(repo.name)) return false;
        
        return true;
      })
      .map(repo => {
        const category = detectCategory(repo);
        
        return {
          id: repo.id,
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
          description: getDescription(repo),
          category: category,
          repoName: repo.name,
          technologies: getTechnologies(repo),
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          lastUpdated: repo.updated_at,
          htmlUrl: repo.html_url,
          homepage: repo.homepage,
          featured: false,
          fromGitHub: true,
          complexity: 'intermediate' // Default complexity for GitHub repos
        };
      })
      .filter(repo => repo.category !== 'Other'); // Exclude uncategorized repos
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

/**
 * Merge featured projects with GitHub repos
 */
export async function getAllProjects() {
  const githubRepos = await fetchGitHubRepos();
  
  // Create a map of featured project repo names
  const featuredRepoNames = new Set(
    featuredProjects.map(p => p.repoName.toLowerCase())
  );
  
  // Filter out GitHub repos that are already in featured projects
  const additionalRepos = githubRepos.filter(
    repo => !featuredRepoNames.has(repo.repoName.toLowerCase())
  );
  
  // Combine featured projects with additional repos
  return [...featuredProjects, ...additionalRepos];
}

/**
 * Get GitHub profile stats
 */
export async function getGitHubStats() {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}`),
      fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`)
    ]);
    
    const user = await userResponse.json();
    const repos = await reposResponse.json();
    
    const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
    const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);
    
    return {
      publicRepos: user.public_repos,
      followers: user.followers,
      totalStars,
      totalForks,
      profileUrl: user.html_url,
      avatarUrl: user.avatar_url
    };
  } catch (error) {
    console.error('Error fetching GitHub stats:', error);
    return null;
  }
}