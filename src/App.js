import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// ⬆️ Keep BrowserRouter (don't change this)

import TechHome from './pages/TechHome';
import ProjectsPage from './pages/ProjectsPage';
import TopicPage from './pages/TopicPage';
import BlogPost from './pages/BlogPost';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tech.css';
import './styles/tech-home-enhanced.css';
import './styles/blog-post.css';

function App() {
  return (
    <Router basename="/tech-insights">
      {/* ⬆️ CHANGE: Use explicit basename instead of process.env.PUBLIC_URL */}
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<TechHome />} />
          <Route path="/topic/:id" element={<TopicPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

/*
CHANGES:
1. Line 15: basename="/tech-insights" (explicit path)
2. Make sure package.json has "homepage" set (see package.json file)
3. Create 404.html file (next step)
*/