import React from 'react';
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
  return (
    <div 
      className='bg-transparent shadow-md rounded-b-lg pr-4 flex items-center h-16 w-full fixed top-0 left-0 z-50' 
      style={{ 
        backdropFilter: 'blur(10px)', 
        backgroundColor: 'rgba(0, 0, 0, 0.3)' // Adjust transparency here
      }}
    >
      <a href="/" className="flex items-center">
        <img
          src="/assets/gitamlogo.png"
          alt="Gitam Logo"
          className="h-10 ml-4"
        />
      </a>
      <h1 className='hidden xl:flex text-white text-2xl font-bold m-0'>
        Gitam GitHub Community
      </h1>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', marginLeft: 'auto' }}>
        {menuItems.map(item => (
          <Menu.Item style={{ borderRadius: "10px" }} key={item.key}>
            <Link to={item.link}>{item.label}</Link>
          </Menu.Item>
        ))}
      </Menu>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='ml-4'>
        <GithubOutlined className='text-white text-2xl' />
      </a>
    </div>
  );
}

export default Header;
