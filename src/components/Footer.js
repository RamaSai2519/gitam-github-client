import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ backgroundColor: '#001529', color: '#fff', textAlign: 'center', padding: '20px 50px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p style={{ fontSize: '14px', margin: '0' }}>
          &copy; 2024 Gitam GitHub Community. All rights reserved.
        </p>
        <p style={{ fontSize: '12px', margin: '5px 0 0' }}>
          Designed with ❤️ by the Gitam GitHub Community Team.
        </p>
      </div>
    </AntFooter>
  );
}

export default Footer;
