import React from 'react';
import { Card, Col, Row } from 'antd';

const { Meta } = Card;

const resources = [
  {
    id: 1,
    title: 'GitHub Docs',
    description: 'Official GitHub documentation for understanding GitHub features and best practices.',
    link: 'https://docs.github.com',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 2,
    title: 'React Documentation',
    description: 'The official React documentation for learning and mastering React.',
    link: 'https://reactjs.org/docs/getting-started.html',
    image: 'https://via.placeholder.com/300x200'
  },
  {
    id: 3,
    title: 'Ant Design Docs',
    description: 'Ant Design documentation for using the Ant Design component library in your projects.',
    link: 'https://ant.design/docs/react/introduce',
    image: 'https://via.placeholder.com/300x200'
  },
  // Add more resources as needed
];

function ResourcesPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Resources</h2>
      <Row gutter={16}>
        {resources.map(resource => (
          <Col span={8} key={resource.id} className="mb-4">
            <Card
              hoverable
              cover={<img alt={resource.title} src={resource.image} />}
              actions={[
                <a href={resource.link} target="_blank" rel="noopener noreferrer">Learn More</a>
              ]}
            >
              <Meta title={resource.title} description={resource.description} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ResourcesPage;
