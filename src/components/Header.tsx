import React from 'react';
import { ConfigProvider, Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { GithubOutlined } from '@ant-design/icons';
import useScrollPosition from '../utils/useScrollPosition';

interface MenuItem {
  key: string;
  link: string;
  label: string;
}

const menuItems: MenuItem[] = [
  { key: '1', link: '/', label: 'Home' },
  { key: '2', link: '/team', label: 'Team' },
  { key: '3', link: '/resources', label: 'Resources' },
  { key: '4', link: '/gallery', label: 'Gallery' },
  { key: '5', link: '/projects', label: 'Projects' },
  { key: '6', link: '/testimonials', label: 'Testimonials' },
  { key: '7', link: '/contact', label: 'Contact' },
];

const Header: React.FC = () => {
  const router = useRouter();
  const route = router.pathname;
  const { scrolled100vh } = useScrollPosition();
  const tintedHeader = scrolled100vh || route !== "/";
  if (route === "/test") return null;

  return (
    <ConfigProvider>
      <div
        className={`${
          route === '/' ? 'fixed' : 'sticky'
        } ${
          tintedHeader ? 'bg-white shadow-lg' : 'bg-transparent'
        } pr-4 flex items-center h-16 w-full top-0 left-0 z-50 transition-all duration-300 ease-in-out`}
      >
        <Link href="/" passHref>
          <a className="flex items-center">
            <img
              src="/assets/gitamlogo.png"
              alt="Gitam Logo"
              className="h-10 ml-4 transform transition-transform duration-500 hover:scale-110"
            />
          </a>
        </Link>
        <Menu
          theme="light"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          className="ml-auto bg-transparent"
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} className="hover:bg-gray-200 rounded-lg">
              <Link href={item.link} passHref>
                <a
                  className={`${
                    tintedHeader ? 'text-black' : 'text-white'
                  } font-semibold`}
                >
                  {item.label}
                </a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4"
        >
          <GithubOutlined
            className={`${
              tintedHeader ? 'text-black' : 'text-white'
            } text-2xl transform transition-transform duration-500 hover:scale-125`}
          />
        </a>
      </div>
    </ConfigProvider>
  );
};

export default Header;