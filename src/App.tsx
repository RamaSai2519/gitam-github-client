import React from 'react';
import { Layout } from 'antd';
import TestPage from './pages/Test';
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
import { useRouter } from 'next/router';

const { Content } = Layout;

const App: React.FC = () => {
  const router = useRouter();

  return (
    <Layout>
      <Header />
      <Content>
        <div className="w-full">
          {router.pathname === '/' && <HomePage />}
          {router.pathname === '/team' && <TeamPage />}
          {router.pathname === '/resources' && <ResourcesPage />}
          {router.pathname === '/gallery' && <GalleryPage />}
          {router.pathname === '/projects' && <ProjectPage />}
          {router.pathname === '/testimonials' && <TestimonialsPage />}
          {router.pathname === '/contact' && <ContactPage />}
          {router.pathname === '/test' && <TestPage />}
        </div>
      </Content>
      <Footer />
      <SpeedInsights />
    </Layout>
  );
}

export default App;