import React from 'react';
import { Menu } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

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
    <div className='bg-[#001529] justify-between shadow-md rounded-b-lg pr-4 flex items-center h-16 w-full' >
      <img
        src="/assets/gitamlogo.png"
        alt="Gitam Logo"
        className="h-10 ml-4"
      />
      <h1 className='hidden md:flex text-white text-2xl font-bold m-0'>
        Gitam GitHub Community
      </h1>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} >
        {menuItems.map(item => (
          <Menu.Item style={{borderRadius: "10px"}} key={item.key}>
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
