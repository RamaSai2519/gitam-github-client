import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={{ backgroundColor: '#001529', padding: '0 50px' }}>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', borderBottom: 'none' }}
      >
        <Menu.Item key="1">
          <Link href="/" passHref>
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/resources" passHref>
            <a>Resources</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/team" passHref>
            <a>Team</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/gallery" passHref>
            <a>Gallery</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/projects" passHref>
            <a>Projects</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/testimonials" passHref>
            <a>Testimonials</a>
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
};

export default Navbar;