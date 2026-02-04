import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TechHome from './pages/TechHome';
import TopicPage from './pages/TopicPage';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/tech.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<TechHome />} />
          <Route path="/topic/:id" element={<TopicPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
