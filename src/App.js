import './App.css';
import React from 'react';
import { Layout } from 'antd';
import TeamPage from './pages/TeamPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectPage from './pages/ProjectPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import ResourcesPage from './pages/ResourcesPage';
import TestimonialsPage from './pages/TestimonialsPage';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Header /> {/* Header is included here to be consistent across all pages */}
        <Content>
          <div className="w-full p-5">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/team" element={<TeamPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/projects" element={<ProjectPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </Content>
        <Footer />
      </Layout>
      <SpeedInsights />
    </Router>
  );
}

export default App;