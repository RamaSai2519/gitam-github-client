import React, { useState, useEffect } from 'react';
import { ConfigProvider, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';
import useScrollPosition from '../utils/useScrollPosition';

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
  const location = useLocation();
  const route = location.pathname;
  useScrollPosition();

  const [hideButton, setHideButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideButton(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (route === "/test") return null;

  return (
    <ConfigProvider>
      <div
        className="fixed left-1/2 transform -translate-x-1/2 z-50 top-0 flex items-center h-16 max-w-4xl w-full bg-white rounded-full"
        style={{
          padding: '0 1.5rem',
          marginTop: '10px',
          boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '12px',
        }}
      >
        <style>
          {`
            @keyframes glowing-border {
              0% {
                border-color: #ff8a00;
                box-shadow: 0 0 10px #ff8a00, 0 0 20px #ff8a00, 0 0 30px #ff8a00;
              }
              50% {
                border-color: #00c6ff;
                box-shadow: 0 0 10px #00c6ff, 0 0 20px #00c6ff, 0 0 30px #00c6ff;
              }
              100% {
                border-color: #ff8a00;
                box-shadow: 0 0 10px #ff8a00, 0 0 20px #ff8a00, 0 0 30px #ff8a00;
              }
            }

            .neon-button {
              padding: 0.5rem 1.5rem;
              color: #fff;
              font-size: 1rem;
              font-weight: bold;
              background-color: #000;
              border: 2px solid;
              border-radius: 9999px;
              animation: glowing-border 2s infinite;
              text-transform: uppercase;
              cursor: pointer;
            }

            .menu-item-hover {
              color: #333;
              transition: color 0.3s ease, opacity 0.3s ease;
            }

            .menu-item-hover:hover {
              color: #00c6ff;
              opacity: 0.85;
            }
          `}
        </style>

        <a href="/" className="flex items-center">
          <GithubOutlined className="text-2xl mx-2" />
          <span className="font-bold text-lg">GitHub Community</span>
        </a>

        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="ml-auto bg-transparent"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} className="bg-transparent">
              <Link to={item.link}>
                <span className="menu-item-hover font-semibold">
                  {item.label}
                </span>
              </Link>
            </Menu.Item>
          ))}
        </Menu>

        {!hideButton && (
          <button className="neon-button">
            EPOCH
          </button>
        )}
      </div>
    </ConfigProvider>
  );
};

export default Header;
