import React from 'react';
import { Layout, Menu, Dropdown, Button } from 'antd';
import { DownOutlined, GithubOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Header: AntHeader } = Layout;

const menu = (
  <Menu>
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
);

function Header() {
  return (
    <AntHeader
      style={{
        backgroundColor: '#001529',
        padding: '0 20px',
        borderRadius: '0 0 10px 10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          maxWidth: '1200px',
          margin: '0 auto',
          height: '64px',
          justifyContent: 'space-between',
        }}
      >
        <img
          src="/assets/gitamlogo.png"
          alt="Gitam Logo"
          style={{ height: '40px', marginRight: '20px', borderRadius: '8px' }}
        />
        <h1
          style={{
            color: '#fff',
            fontSize: '24px',
            fontWeight: 'bold',
            margin: 0,
          }}
        >
          Gitam GitHub Community
        </h1>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{
            backgroundColor: 'transparent',
            borderBottom: 'none',
            lineHeight: '64px',
          }}
        >
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/team">Team</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="/resources">Resources</Link>
          </Menu.Item>
        </Menu>
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <Button type="link" style={{ color: '#fff' }}>
            View More <DownOutlined />
          </Button>
        </Dropdown>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '20px' }}
        >
          <GithubOutlined style={{ fontSize: '24px', color: '#fff' }} />
        </a>
      </div>
    </AntHeader>
  );
}

export default Header;