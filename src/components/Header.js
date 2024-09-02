import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
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
  const { scrolled100vh } = useScrollPosition();
  const tintedHeader = scrolled100vh || route !== "/";
  if (route === "/test") return null;
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            darkItemBg: 'transparent',
            darkItemSelectedBg: 'transparent',
          },
        },
      }}
    >
      <div
        className={`${route === '/' ? 'fixed' : "sticky"} ${tintedHeader ? "bg-[#1A4A4A] shadow-md" : "bg-[transparent]"} rounded-b-lg pr-4 flex items-center h-16 w-full fixed top-0 left-0 z-50`}
      >
        <a href="/" className="flex items-center">
          <img
            src="/assets/gitamlogo.png"
            alt="Gitam Logo"
            className="h-10 ml-4"
          />
        </a>
        <Menu theme='dark' mode="horizontal" defaultSelectedKeys={['1']} className='ml-auto bg-transparent'>
          {menuItems.map(item => (
            <Menu.Item key={item.key}>
              <Link to={item.link}><span className='text-white'>{item.label}</span></Link>
            </Menu.Item>
          ))}
        </Menu>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className='ml-4'>
          <GithubOutlined className='text-white text-2xl' />
        </a>
      </div>
    </ConfigProvider>
  );
}

export default Header;
