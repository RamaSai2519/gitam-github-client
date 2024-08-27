import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { GithubOutlined } from '@ant-design/icons';

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
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50); // Adjust the threshold as needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed top-0 right-0 left-0 z-10 flex items-center h-16 ${scrolling ? 'bg-black' : 'bg-transparent'} transition-all duration-300`}>
      <a href="/" className="flex-shrink-0 ml-4">
        <img
          src="/assets/gitamlogo.png"
          alt="Gitam Logo"
          className="h-10"
        />
      </a>
      <h1 className='hidden xl:flex text-white text-2xl font-bold m-0 flex-shrink-0'>
        Gitam GitHub Community
      </h1>
      <div className="ml-auto flex items-center">
        <Menu
          theme={scrolling ? "light" : "dark"}
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ 
            background: 'transparent',
            borderRadius: '10px',
            lineHeight: '64px', // Align the menu items vertically center
          }}
        >
          {menuItems.map(item => (
            <Menu.Item 
              key={item.key}
              style={{ 
                borderRadius: '10px',
                background: 'rgba(0, 0, 0, 0)',
              }}
            >
              <Link to={item.link} style={{ color: 'white' }}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='ml-4'>
          <GithubOutlined className={`text-2xl ${scrolling ? 'text-black' : 'text-white'}`} />
        </a>
      </div>
    </div>
  );
}

export default Header;
