import React, { useState } from 'react';
import { Layout, Space, Typography, Input, Button, message } from 'antd';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    if (email) {
      message.success(`Thank you for joining us, ${email}!`);
      setEmail(''); 
    } else {
      message.error('Please enter a valid email!');
    }
  };

  return (
    <AntFooter
      style={{
        background: '#000000', 
        color: '#ffffff', 
        padding: '40px 20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Left side - Logo and Club Info */}
        <div style={{ flex: 1, minWidth: '200px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
          {/* GitHub Logo */}
          <img
            src="https://icon-library.com/images/github-logo-icon/github-logo-icon-29.jpg"
            alt="GitHub Logo"
            style={{ width: '120px', marginRight: '15px' }} 
          />
          
          {/* Club Info */}
          <div>
            <Text
              style={{
                fontSize: '22px', 
                fontWeight: 'bold',
                color: '#00FFFF', 
              }}
            >
              "Where Innovation Meets Collaboration"
            </Text>
            <div style={{ marginTop: '10px' }}>
              <a href="mailto:github_community@gitam.in" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                github_community@gitam.in
              </a>
              <p style={{ margin: '5px 0', color: '#ffffff' }}>Gitam University, Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Center - Email Signup */}
        <div style={{ flex: 1, minWidth: '200px', textAlign: 'center', marginBottom: '20px' }}>
          <Text style={{ fontSize: '16px', marginBottom: '10px', display: 'block', color: '#ffffff' }}>
            Join our GitHub Community.!
          </Text>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              maxWidth: '300px',
              marginRight: '10px',
              borderColor: '#ffffff',
              backgroundColor: '#333333',
              color: '#ffffff',
            }}
            placeholderStyle={{ color: '#aaaaaa' }} 
          />
          <Button
            onClick={handleEmailSubmit}
            style={{
              color: '#ffffff',
              backgroundColor: '#000000',
              borderColor: '#ffffff',
            }}
          >
            Join Us
          </Button>
        </div>

        {/* Right side - Social Links & CTA */}
        <div style={{ flex: 1, minWidth: '200px', marginBottom: '20px', textAlign: 'right' }}>
          <Space size="large">
            <a href="https://github.com/github-community-gitam/" target="_blank" rel="noopener noreferrer">
              <GithubOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </a>
            <a href="https://www.linkedin.com/company/github-gitam/" target="_blank" rel="noopener noreferrer">
              <LinkedinOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </a>
            <a href="https://www.instagram.com/github.gitamblr/" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </a>
            <a href="https://chat.whatsapp.com/Jj5RSGcD3TBBBZSCq8WAuO" target="_blank" rel="noopener noreferrer">
              <WhatsAppOutlined style={{ fontSize: '24px', color: '#ffffff' }} />
            </a>
          </Space>

          {/* Call to Action Button */}
          <div style={{ marginTop: '20px' }}>
            <a
              href="https://github.com/your-repo"
              style={{
                color: '#ffffff',
                backgroundColor: '#000000',
                padding: '10px 20px',
                borderRadius: '5px',
                textDecoration: 'none',
                border: '1px solid #ffffff',
              }}
            >
              Contribute Now
            </a>
          </div>

          <p style={{ color: '#ffffff', marginTop: '10px', fontSize: '14px' }}>
            © 2024 GitHub Community Club. All rights reserved.
          </p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;
