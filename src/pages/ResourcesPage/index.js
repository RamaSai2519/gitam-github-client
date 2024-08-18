import React from 'react';
import { Card, Col, Row, Typography, Divider } from 'antd';
import { YoutubeOutlined, BookOutlined } from '@ant-design/icons';
import './ResourcesPage.css';

const { Meta } = Card;
const { Title } = Typography;

const resources = [
  {
    id: 1,
    title: 'GitHub Docs',
    description: 'Official GitHub documentation for understanding GitHub features and best practices.',
    link: 'https://docs.github.com',
    image: 'https://blog.openreplay.com/images/building-professional-docs-sites-from-github-readme-files/images/hero.png'
  },
  {
    id: 2,
    title: 'React Documentation',
    description: 'The official React documentation for learning and mastering React.',
    link: 'https://reactjs.org/docs/getting-started.html',
    image: 'https://media.dev.to/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faw3ofc8dmekid4ourweo.jpg'
  },
  {
    id: 3,
    title: 'Ant Design Docs',
    description: 'Ant Design documentation for using the Ant Design component library in your projects.',
    link: 'https://ant.design/docs/react/introduce',
    image: 'https://studio.uxpincdn.com/studio/wp-content/uploads/2022/11/Ant-Design.png.webp'
  },
  {
    id: 4,
    title: 'JavaScript Info',
    description: 'Modern JavaScript tutorial and guide.',
    link: 'https://javascript.info/',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto'
  },
  {
    id: 5,
    title: 'FreeCodeCamp',
    description: 'Learn to code with free resources, challenges, and projects.',
    link: 'https://www.freecodecamp.org/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNKFg9bKzsevdtPmdb7fLYZijKFwLcjxd4JY3-bCnxtQS3WZZCVXijDTined-AHoQCgA&usqp=CAU'
  },
  {
    id: 6,
    title: 'MDN Web Docs',
    description: 'Comprehensive resource for web technologies, including HTML, CSS, and JavaScript.',
    link: 'https://developer.mozilla.org/en-US/',
    image: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/moz_blog_header_MDN-Intro.jpg'
  },
  
  {
    id: 7,
    title: 'W3Schools',
    description: 'Learn web development with tutorials, references, and examples.',
    link: 'https://www.w3schools.com/',
    image: 'https://media.licdn.com/dms/image/D5612AQHdPlX2l2HXNA/article-cover_image-shrink_600_2000/0/1699401234451?e=2147483647&v=beta&t=kpOW6GAlGEueIYZx-lavKDFFtzPG0BpcfLPGzXfYw6k'
  }
];

const videoResources = [
  {
    id: 1,
    title: 'Understanding Git & GitHub',
    description: 'A beginner-friendly video tutorial on Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    image: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg'
  },
  {
    id: 2,
    title: 'React Crash Course',
    description: 'Learn React.js in this comprehensive crash course.',
    link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
    image: 'https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg'
  },
  // New video tutorial
  {
    id: 3,
    title: 'JavaScript Fundamentals',
    description: 'Deep dive into JavaScript fundamentals.',
    link: 'https://www.youtube.com/watch?v=5fb2aW2X8aY',
    image: 'https://static-assets.codecademy.com/assets/course-landing-page/meta/4x3/learn-javascript-fundamentals.jpg'
  }
];

const blogResources = [
  {
    id: 1,
    title: 'React Patterns',
    description: 'A blog post on best practices and patterns in React.',
    link: 'https://reactpatterns.com/',
    image: 'https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social.png'
  },
  {
    id: 2,
    title: 'JavaScript The Right Way',
    description: 'A guide to writing better JavaScript.',
    link: 'https://jstherightway.org/',
    image: 'https://ultimatecourses.com/assets/share/courses/javascript-51f65a000ac5f98e707cac1fbdf54c209529157ff399544518dba9c47b1f31da.png'
  },

  {
    id: 3,
    title: 'CSS Tricks',
    description: 'A blog full of useful CSS tips and tricks.',
    link: 'https://css-tricks.com/',
    image: 'https://www.dilate.com.au/wp-content/uploads/2020/02/30-CSS-Tricks-Every-Web-Designer-Should-Know-Featured.jpg'
  }
];

function ResourcesPage() {
  return (
    <div className='w-full min-h-screen p-6 bg-custom-gradient'>
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
