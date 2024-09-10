import React, { useState } from 'react';
import { Layout, Space, Typography, Input, Button, message } from 'antd';
import { GithubOutlined, LinkedinOutlined, InstagramOutlined, WhatsAppOutlined } from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Text } = Typography;

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailSubmit = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      message.success(`Thank you for joining us, ${email}!`);
      setEmail('');
    } else {
      message.error('Please enter a valid email!');
    }
  };

  return (
    <AntFooter className="bg-black text-white py-10 bottom-0 left-0">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center flex-wrap">
        {/* Left side - Logo and Club Info */}
        <div className="flex-1 min-w-0 mb-5 flex items-center">
          <img
            src="https://icon-library.com/images/github-logo-icon/github-logo-icon-29.jpg"
            alt="GitHub Logo"
            className="w-24 mr-5"
          />
          <div>
            <Text className="text-2xl font-bold text-cyan-500">
              "Where Innovation Meets Collaboration"
            </Text>
            <div className="mt-2">
              <a href="mailto:github_community@gitam.in" className="text-white underline">
                github_community@gitam.in
              </a>
              <p className="mt-1 text-white">Gitam University, Bengaluru</p>
            </div>
          </div>
        </div>

        {/* Center - Email Signup */}
        <div className="flex-1 min-w-0 text-center mb-5">
          <Text className="text-lg mb-2 block text-white">Join our GitHub Community!</Text>
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="max-w-xs mr-2 border-white bg-gray-800 text-white"
          />
          <Button
            onClick={handleEmailSubmit}
            className="text-white bg-black border-white hover:bg-gray-700 transition duration-300"
          >
            Join Us
          </Button>
        </div>

        {/* Right side - Social Links & CTA */}
        <div className="flex-1 min-w-0 mb-5 text-center md:text-right">
          <Space size="large">
            <a href="https://github.com/github-community-gitam/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <GithubOutlined className="text-white text-2xl hover:text-cyan-500 transition duration-300" />
            </a>
            <a href="https://www.linkedin.com/company/github-gitam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedinOutlined className="text-white text-2xl hover:text-cyan-500 transition duration-300" />
            </a>
            <a href="https://www.instagram.com/github.gitamblr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramOutlined className="text-white text-2xl hover:text-cyan-500 transition duration-300" />
            </a>
            <a href="https://chat.whatsapp.com/Jj5RSGcD3TBBBZSCq8WAuO" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppOutlined className="text-white text-2xl hover:text-cyan-500 transition duration-300" />
            </a>
          </Space>

          {/* Call to Action Button */}
          <div className="mt-5">
            <a
              href="https://github.com/your-repo"
              className="text-white bg-black px-4 py-2 rounded-md text-decoration-none border border-white hover:bg-gray-700 transition duration-300"
            >
              Contribute Now
            </a>
          </div>

          <p className="text-white mt-5 text-sm">
            © 2024 GitHub Community Club. All rights reserved.
          </p>
        </div>
      </div>
    </AntFooter>
  );
};

export default Footer;