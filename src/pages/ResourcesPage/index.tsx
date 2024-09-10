import React from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import { YoutubeOutlined, BookOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title } = Typography;

interface Resource {
  id: number;
  title: string;
  description: string;
  link: string;
  image: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'GitHub Docs',
    description: 'Official GitHub documentation for understanding GitHub features and best practices.',
    link: 'https://docs.github.com',
    image: 'https://blog.openreplay.com/images/building-professional-docs-sites-from-github-readme-files/images/hero.png'
  },
  // Add more resources as needed
];

const videoResources: Resource[] = [
  {
    id: 1,
    title: 'Understanding Git & GitHub',
    description: 'A beginner-friendly video tutorial on Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    image: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg'
  },
  // Add more video resources as needed
];

const blogResources: Resource[] = [
  {
    id: 1,
    title: 'React Patterns',
    description: 'A blog post on best practices and patterns in React.',
    link: 'https://reactpatterns.com/',
    image: 'https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social.png'
  },
  // Add more blog resources as needed
];

const ResourcesPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen p-6">
      <Title level={2} className="text-center mb-6 text-white">Resources</Title>
      <Divider className="border-white" />

      <Title level={4} className="text-center mb-4 text-white"><BookOutlined /> Documentation & Guides</Title>
      <Row gutter={[16, 16]} justify="center">
        {resources.map(resource => (
          <Col xs={24} sm={12} md={8} lg={6} key={resource.id} className="mb-4">
            <Card
              hoverable
              cover={<img alt={resource.title} src={resource.image} className="object-cover h-48 w-full" />}
              actions={[
                <a key="learn-more" href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              ]}
              className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-48">
                <Meta title={resource.title} description={resource.description} className="text-gray-600" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider className="border-white" />

      <Title level={4} className="text-center mb-4 text-white"><YoutubeOutlined /> Video Tutorials</Title>
      <Row gutter={[16, 16]} justify="center">
        {videoResources.map(resource => (
          <Col xs={24} sm={12} md={8} lg={6} key={resource.id} className="mb-4">
            <Card
              hoverable
              cover={<img alt={resource.title} src={resource.image} className="object-cover h-48 w-full" />}
              actions={[
                <a key="watch-video" href={resource.link} target="_blank" rel="noopener noreferrer">Watch Video</a>
              ]}
              className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-48">
                <Meta title={resource.title} description={resource.description} className="text-gray-600" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <Divider className="border-white" />

      <Title level={4} className="text-center mb-4 text-white"><BookOutlined /> Blogs & Articles</Title>
      <Row gutter={[16, 16]} justify="center">
        {blogResources.map(resource => (
          <Col xs={24} sm={12} md={8} lg={6} key={resource.id} className="mb-4">
            <Card
              hoverable
              cover={<img alt={resource.title} src={resource.image} className="object-cover h-48 w-full" />}
              actions={[
                <a key="read-blog" href={resource.link} target="_blank" rel="noopener noreferrer">Read Blog</a>
              ]}
              className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex flex-col h-48">
                <Meta title={resource.title} description={resource.description} className="text-gray-600" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ResourcesPage;