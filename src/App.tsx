import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import HelpCenter from './pages/HelpCenter';
import Careers from './pages/Careers';
import TermsOfService from './pages/TermsOfService';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Reviews from './pages/Reviews';



function App() {
  // Derive basename from PUBLIC_URL for GH Pages or empty for custom domain
  const publicUrl = process.env.PUBLIC_URL || '';
  const url = new URL(publicUrl || window.location.origin);
  const baseName = url.pathname === '/' ? '' : url.pathname.replace(/\/$/, '');
  
  return (
    <Router basename={baseName}>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
