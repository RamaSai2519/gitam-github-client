import React from 'react';
import { Layout, Menu } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import ResourcesPage from './pages/ResourcesPage';
import GalleryPage from './pages/GalleryPage';
import ProjectPage from './pages/ProjectPage';
import TestimonialsPage from './pages/TestimonialsPage';
import ContactPage from './pages/ContactPage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header style={{ backgroundColor: '#001529' }}>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/team">Team</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/resources">Resources</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/gallery">Gallery</Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link to="/projects">Projects</Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link to="/testimonials">Testimonials</Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{ margin: '16px 0' }}>
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
        <Footer style={{ textAlign: 'center' }}>
          Gitam GitHub Community ©2024 Created by Your Team!
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;