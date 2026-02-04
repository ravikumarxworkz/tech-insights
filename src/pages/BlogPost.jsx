import { useParams, Link } from 'react-router-dom';
import { getBlogBySlug, blogPosts } from '../data/blogs';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BlogPost = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <main className="blog-post-page">
        <div className="blog-not-found">
          <h1>Blog Post Not Found</h1>
          <p>The blog post you're looking for doesn't exist.</p>
          <Link to="/" className="back-home-btn">← Back to Home</Link>
        </div>
      </main>
    );
  }

  // Get related posts (same category, exclude current)
  const relatedPosts = blogPosts
    .filter(post => post.category === blog.category && post.id !== blog.id)
    .slice(0, 3);

  return (
    <main className="blog-post-page">
      <article className="blog-article">
        {/* Blog Header */}
        <motion.header 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="blog-header"
        >
          <Link to="/" className="back-link">← Back to Home</Link>
          
          <div className="blog-meta-header">
            <span className="blog-category">{blog.category}</span>
            <span className="blog-read-time">{blog.readTime}</span>
          </div>

          <h1 className="blog-title">{blog.title}</h1>
          
          <div className="blog-author-date">
            <span className="blog-author">By {blog.author}</span>
            <span className="blog-separator">•</span>
            <span className="blog-date">
              {new Date(blog.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </span>
          </div>

          <div className="blog-tags">
            {blog.tags.map(tag => (
              <span key={tag} className="blog-tag">{tag}</span>
            ))}
          </div>
        </motion.header>

        {/* Blog Content */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="blog-content"
        >
          <ReactMarkdown
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={vscDarkPlus}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
              h1: ({ node, ...props }) => <h1 className="content-h1" {...props} />,
              h2: ({ node, ...props }) => <h2 className="content-h2" {...props} />,
              h3: ({ node, ...props }) => <h3 className="content-h3" {...props} />,
              p: ({ node, ...props }) => <p className="content-p" {...props} />,
              ul: ({ node, ...props }) => <ul className="content-ul" {...props} />,
              ol: ({ node, ...props }) => <ol className="content-ol" {...props} />,
              table: ({ node, ...props }) => (
                <div className="table-wrapper">
                  <table className="content-table" {...props} />
                </div>
              ),
            }}
          >
            {blog.content}
          </ReactMarkdown>
        </motion.div>

        {/* Share Section */}
        <div className="blog-share-section">
          <h3>Found this helpful? Share it!</h3>
          <div className="share-buttons">
            <button className="share-btn twitter">Share on Twitter</button>
            <button className="share-btn linkedin">Share on LinkedIn</button>
            <button className="share-btn copy">Copy Link</button>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="related-posts-section">
            <h2>Related Articles</h2>
            <div className="related-posts-grid">
              {relatedPosts.map(post => (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.03 }}
                  className="related-post-card"
                >
                  <Link to={`/blog/${post.slug}`}>
                    <span className="related-emoji">{post.thumbnail}</span>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="related-meta">
                      <span>{post.category}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Author Bio */}
        <div className="author-bio">
          <div className="author-avatar">
            <span>RS</span>
          </div>
          <div className="author-info">
            <h3>{blog.author}</h3>
            <p>
              Full-stack developer passionate about teaching programming. 
              Helping developers master Java, Python, .NET, and DSA through 
              practical examples and real-world projects.
            </p>
            <div className="author-social">
              <a href="https://github.com/ravikumarxworkz" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="https://linkedin.com/in/ravikumar-kumbar" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href="https://twitter.com/BONDRAVI20" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Comments Section (Optional - can integrate Disqus/Comments) */}
        <div className="comments-section">
          <h3>💬 Comments</h3>
          <p className="comments-placeholder">
            Comments feature coming soon! For now, feel free to reach out on 
            <a href="https://twitter.com/BONDRAVI20"> Twitter </a> 
            or <a href="https://github.com/ravikumarxworkz"> GitHub</a>.
          </p>
        </div>
      </article>
    </main>
  );
};

export default BlogPost;