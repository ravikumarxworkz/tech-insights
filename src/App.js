import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechHome from './pages/TechHome';
import TopicPage from './pages/TopicPage';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tech.css';
import './styles/tech-home-enhanced.css';
import './styles/blog-post.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<TechHome />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;