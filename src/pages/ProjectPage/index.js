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
];

function ProjectPage() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
      <Row gutter={16}>
        {projects.map(project => (
          <Col span={24} md={12} lg={8} key={project.id} className="mb-8">
            <Card
              title={project.title}
              bordered={false}
              style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
              extra={
                <Button
                  type="primary"
                  icon={<GithubOutlined />}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Button>
              }
            >
              <p>{project.description}</p>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ProjectPage;