import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import './Header.css';

const menuItems = [
  { key: '1', link: '/', label: 'Home' },
  { key: '2', link: '/team', label: 'Team' },
  { key: '3', link: '/resources', label: 'Resources' },
  { key: '4', link: '/gallery', label: 'Gallery' },
  { key: '5', link: '/projects', label: 'Projects' },
  { key: '6', link: '/testimonials', label: 'Testimonials' },
  { key: '7', link: '/contact', label: 'Contact' },
];

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <div className={`header-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <a href="/" className="logo-container">
        <img
          src="/assets/gitamlogo.png"
          alt="Gitam Logo"
          className="logo"
        />
      </a>
      <h1 className="header-title">
        Gitam GitHub Community
      </h1>
      <Menu theme={isDarkMode ? "dark" : "light"} mode="horizontal" defaultSelectedKeys={['1']} className="menu">
        {menuItems.map(item => (
          <Menu.Item key={item.key} className="menu-item">
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github-icon">
        <GithubOutlined />
      </a>
      <div className="toggle-container" onClick={toggleMode}>
        <div className={`toggle ${isDarkMode ? 'toggle-dark' : 'toggle-light'}`}>
          <div className="toggle-icon">
            {isDarkMode ? <img src="https://cdn-icons-png.freepik.com/256/5084/5084268.png?semt=ais_hybrid" alt="Moon" /> : <img src="https://cdn-icons-png.freepik.com/256/6348/6348486.png?semt=ais_hybrid" alt="Sun" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
