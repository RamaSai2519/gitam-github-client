import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ResourcesPage from './pages/ResourcesPage';
import TeamPage from './pages/TeamPage';
import GalleryPage from './pages/GalleryPage';
import ProjectPage from './pages/ProjectPage';
import TestimonialsPage from './pages/TestimonialsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;