import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { topicData } from '../data/topics';
import { getRecentBlogs } from '../data/blogs';
import { FaJava, FaPython, FaReact, FaGithub, FaDatabase, FaCode } from 'react-icons/fa';
import { SiDotnet } from 'react-icons/si';

// Calculate total interview questions across all topics
const getTotalInterviewQuestions = () => {
  return Object.values(topicData).reduce((total, topic) => {
    return total + (topic?.questions?.length || 0);
  }, 0);
};

// Generate dynamic recent posts from actual topic data
const generateRecentPosts = () => {
  const posts = [];
  
  // Define topic order for consistency
  const topicOrder = ['java', 'python', 'dotnet', 'mysql', 'dsa', 'git'];
  
  // Get first question from each topic in defined order
  topicOrder.forEach((key) => {
    const topic = topicData[key];
    if (topic?.questions && topic.questions.length > 0) {
      const firstQuestion = topic.questions[0];
      posts.push({
        id: key,
        title: firstQuestion.title,
        tag: topic.title.split(' ')[0], // Get first word as tag
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        link: `/topic/${key}`,
        count: topic.questions.length // Show total count for each topic
      });
    }
  });
  
  return posts.slice(0, 6); // Return first 6
};

// Topic categories for quick access
const topicCategories = [
  {
    title: 'Java Programming',
    icon: <FaJava />,
    desc: 'Core Java, OOP, Collections & Interview Q&A',
    link: '/topic/java',
    color: '#f89820',
    count: topicData.java?.questions.length || 0
  },
  {
    title: 'Python Essentials',
    icon: <FaPython />,
    desc: 'Python basics, scripting & data structures',
    link: '/topic/python',
    color: '#3776ab',
    count: topicData.python?.questions.length || 0
  },
  {
    title: '.NET & C#',
    icon: <SiDotnet />,
    desc: 'ASP.NET Core, LINQ & backend development',
    link: '/topic/dotnet',
    color: '#512bd4',
    count: topicData.dotnet?.questions.length || 0
  },
  {
    title: 'React.js',
    icon: <FaReact />,
    desc: 'Components, Hooks, State Management',
    link: '/topic/react',
    color: '#61dafb',
    count: 'Coming Soon'
  },
  {
    title: 'MySQL Database',
    icon: <FaDatabase />,
    desc: 'SQL queries, joins, normalization & optimization',
    link: '/topic/mysql',
    color: '#00758f',
    count: topicData.mysql?.questions.length || 0
  },
  {
    title: 'Git & GitHub',
    icon: <FaGithub />,
    desc: 'Version control, collaboration & workflows',
    link: '/topic/git',
    color: '#f05032',
    count: topicData.git?.questions.length || 0
  },
  {
    title: 'DSA & Algorithms',
    icon: <FaCode />,
    desc: 'Patterns, arrays, strings & problem solving',
    link: '/topic/dsa',
    color: '#ff6b6b',
    count: topicData.dsa?.questions.length || 0
  }
];

const TechHome = () => {
  const recentPosts = generateRecentPosts();
  const recentBlogs = getRecentBlogs(3);
  const totalQuestions = getTotalInterviewQuestions();

  return (
    <main className="tech-home">
      {/* Hero Section */}
      <section className="hero-section">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="hero-content"
        >
          <h1 className="hero-title">
            Master <span className="highlight">Programming</span> & 
            <span className="highlight"> Problem Solving</span>
          </h1>
          <p className="hero-subtitle">
            Learn Java, Python, .NET, DSA with real code examples. 
            Build projects. Ace interviews. Land your dream job.
          </p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">40+</span>
              <span className="stat-label">Code Examples</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">7</span>
              <span className="stat-label">Topics</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Interview Q&A</span>
            </div>
          </div>
          <div className="hero-cta">
            <Link to="/topic/java" className="cta-primary">Start Learning</Link>
            <Link to="/topic/dsa" className="cta-secondary">Practice DSA</Link>
          </div>
        </motion.div>
      </section>

      {/* Quick Access Topics Grid */}
      <section className="topics-grid-section">
        <div className="section-header">
          <h2>Explore Topics</h2>
          <p>Choose your learning path</p>
        </div>
        
        <div className="topics-grid">
          {topicCategories.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, translateY: -5 }}
              className="topic-card"
            >
              <Link to={topic.link}>
                <div className="topic-icon" style={{ color: topic.color }}>
                  {topic.icon}
                </div>
                <h3>{topic.title}</h3>
                <p>{topic.desc}</p>
                <div className="topic-footer">
                  <span className="topic-count">{topic.count} {typeof topic.count === 'number' ? 'Programs' : ''}</span>
                  <span className="topic-arrow">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 🎯 MOCK INTERVIEW CTA SECTION - HIGHLIGHTED */}
      <section className="mock-interview-cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mock-interview-banner"
        >
          <div className="cta-badge">🎯 NEW FEATURE</div>
          <h2>Full-Length Mock Interviews</h2>
          <p>Practice with realistic timed interviews, track your progress, and compete on leaderboards</p>
          
          <div className="cta-features">
            <div className="feature">
              <span className="feature-icon">⏱️</span>
              <span>30-minute tests</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📊</span>
              <span>15 questions per test</span>
            </div>
            <div className="feature">
              <span className="feature-icon">🏆</span>
              <span>Leaderboards & rankings</span>
            </div>
            <div className="feature">
              <span className="feature-icon">📈</span>
              <span>Track all attempts</span>
            </div>
          </div>

          <div className="cta-buttons">
            <Link to="/mock-interview" className="cta-btn cta-btn-primary">
              🚀 Start Mock Interview
            </Link>
            <Link to="/leaderboard" className="cta-btn cta-btn-secondary">
              🏅 View Leaderboard
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Main Content Grid */}
      <div className="dashboard-grid">
        {/* Left Column: Recent Updates */}
        <section className="recent-posts-section">
          <div className="section-header">
            <h2>Latest Updates</h2>
            <p>Recently added code examples</p>
          </div>
          
          <div className="posts-list">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="post-card-compact"
              >
                <Link to={post.link}>
                  <span className={`tag tag-${post.tag.toLowerCase().replace('.', '').replace(/\s+/g, '')}`}>
                    {post.tag}
                  </span>
                  <div className="post-info">
                    <h3>{post.title}</h3>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <span className="arrow-icon">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="view-all-container">
            <Link to="/topic/dsa" className="view-all-btn">
              View All Topics →
            </Link>
          </div>
        </section>

        {/* Right Column: Tech Blogs & Resources */}
        <section className="trends-section">
          <div className="section-header">
            <h2>Latest Blog Posts</h2>
            <p>Tips, tutorials & career advice</p>
          </div>
          
          <div className="trends-list">
            {recentBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="trend-card"
              >
                <Link to={`/blog/${blog.slug}`}>
                  <div className="blog-header">
                    <span className="blog-emoji">{blog.thumbnail}</span>
                    <div className="blog-meta">
                      <span className="trend-tag">{blog.category}</span>
                      <span className="read-time">{blog.readTime}</span>
                    </div>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-footer">
                    <span className="blog-date">{new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    <span className="read-more">Read more →</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="quick-links-box">
            <h3>🚀 Quick Resources</h3>
            <ul className="quick-links">
              <li><Link to="/topic/git">📚 Git Commands Cheatsheet</Link></li>
              <li><Link to="/topic/java">☕ Java Interview Q&A</Link></li>
              <li><Link to="/topic/dsa">💡 DSA Practice Problems</Link></li>
              <li><a href="https://github.com/ravikumarxworkz" target="_blank" rel="noopener noreferrer">🔗 GitHub Profile</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="newsletter-box">
            <h3>📬 Stay Updated</h3>
            <p>Get new tutorials and tips weekly</p>
            <div className="newsletter-form">
              <input type="email" placeholder="your@email.com" />
              <button className="subscribe-btn">Subscribe</button>
            </div>
            <span className="newsletter-note">Free. No spam. Unsubscribe anytime.</span>
          </div>
        </section>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="cta-content"
        >
          <h2>Ready to Level Up Your Coding Skills?</h2>
          <p>Join thousands of developers learning and growing together</p>
          <div className="cta-buttons">
            <Link to="/topic/java" className="cta-primary">Start Learning Java</Link>
            <Link to="/topic/python" className="cta-primary">Explore Python</Link>
            <Link to="/topic/dsa" className="cta-primary">Practice DSA</Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default TechHome;