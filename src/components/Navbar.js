import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#001529', padding: '0 50px' }}>
      <Menu
        mode="horizontal"
        theme="dark"
        style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'transparent', borderBottom: 'none' }}
      >
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/resources">Resources</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/team">Team</Link>
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
      </Menu>
    </nav>
  );
}

export default Navbar;
