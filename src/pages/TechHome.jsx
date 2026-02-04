import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const recentPosts = [
  { id: 1, title: 'Java Stream API Guide', tag: 'Java', date: 'Feb 4, 2026' },
  { id: 2, title: 'Mastering React Hooks', tag: 'React', date: 'Feb 3, 2026' },
  { id: 3, title: 'Python List Comprehension', tag: 'Python', date: 'Feb 1, 2026' },
  { id: 4, title: '.NET Core vs Framework', tag: '.NET', date: 'Jan 30, 2026' },
  { id: 5, title: 'Binary Search Visualization', tag: 'DSA', date: 'Jan 28, 2026' },
];

const trendPosts = [
  { id: 101, title: 'Why AI Agents are the Future', desc: 'How autonomous agents are changing coding.', tag: 'Trend' },
  { id: 102, title: 'Serverless Architecture in 2026', desc: 'Is Kubernetes still king?', tag: 'DevOps' },
  { id: 103, title: 'The Rise of Rust in Web Dev', desc: 'Performance meets safety.', tag: 'Rust' },
];

const TechHome = () => {
  return (
    <main className="tech-home">
      <section className="hero-section">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }}
          className="hero-title"
        >
          Explore <span className="highlight">Tech Insights</span>
        </motion.h1>
        <p className="hero-subtitle">Code snippets, Architecture patterns, and Developer wisdom.</p>
      </section>

      <div className="dashboard-grid">
        {/* Left Column: Recent Posts */}
        <section className="recent-posts-section">
          <div className="section-header">
            <h2>Recent Posts</h2>
            <Link to="/all-posts" className="view-all">View All</Link>
          </div>
          
          <div className="posts-list">
            {recentPosts.map(post => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="post-card-compact" 
                key={post.id}
              >
                <span className={`tag tag-${post.tag.toLowerCase().replace('.', '')}`}>{post.tag}</span>
                <div className="post-info">
                  <h3>{post.title}</h3>
                  <span className="post-date">{post.date}</span>
                </div>
                <span className="arrow-icon">→</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Right Column: Tech Trends / Blog */}
        <section className="trends-section">
          <h2>Trending Now</h2>
          <div className="trends-list">
             {trendPosts.map(trend => (
               <div className="trend-card" key={trend.id}>
                 <div className="trend-tag">{trend.tag}</div>
                 <h3>{trend.title}</h3>
                 <p>{trend.desc}</p>
               </div>
             ))}
          </div>
          
          <div className="newsletter-box">
             <h3>Stay Updated</h3>
             <p>Get the latest tips directly.</p>
             <button className="subscribe-btn">Subscribe</button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default TechHome;
