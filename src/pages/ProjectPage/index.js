import React from 'react';
import { Card, Button } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';

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
    description: 'freeCodeCamp is a  open-source codebase and curriculum,Learn to code for free.',
    link: 'https://github.com/freeCodeCamp/freeCodeCamp',
  },
];

const ProjectPage = () => {
  const location = useLocation();
  const route = location.pathname;
  return (
    <div className={`flex flex-col ${route !== "/" ? "min-h-screen" : ""}`}>
      <div>
        <h2 className="text-4xl font-bold text-center mb-12">Our Projects</h2>
        <div className='grid md:grid-cols-3 gap-5'>
          {projects.map(project => (
            <Card
              title={project.title}
              bordered={false}
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
              <div className="max-h-24 overflow-y-auto">
                <p>{project.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
