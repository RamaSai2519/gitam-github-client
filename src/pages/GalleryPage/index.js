import React from 'react';
import { Card, Button, Row, Col } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const projects = [
  {
    id: 1,
    title: 'Emotion Detection using CNN',
    description: 'This project focuses on detecting emotions using Convolutional Neural Networks (CNN). It includes training a model to identify different emotions from facial expressions.',
    link: 'https://github.com/lechakrawarthy/Emotion_Detection_CNN',
  },
  {
    id: 2,
    title: 'Mark Word Game',
    description: 'Mark Word is a game designed to enhance vocabulary and word recognition skills. This project involves game development with interactive features.',
    link: 'https://github.com/RamaSai2519/mark-word',
  },
  {
    id: 3,
    title: 'Code camp',
    description: 'freeCodeCamp is an open-source codebase and curriculum,Learn to code for free.',
    link: 'https://github.com/freeCodeCamp/freeCodeCamp',
  },
];

function ProjectPage() {
  return (
    <div className="w-full min-h-screen p-6 bg-white">
      <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
      <Row gutter={[16, 16]} justify="center">
        {projects.map(project => (
          <Col xs={24} sm={12} md={8} lg={6} key={project.id} className="mb-8">
            <Card
              hoverable
              bordered={false}
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              actions={[
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              ]}
              className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-48">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <div className="flex-grow overflow-hidden">
                  <p className="text-gray-600 text-sm overflow-y-auto h-24">{project.description}</p>
                </div>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectPage;