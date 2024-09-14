import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Input, Select, Tooltip, Button, Spin } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const { Meta } = Card;
const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

// Static resources data
const staticResources = [
  {
    id: 1,
    title: 'GitHub Docs',
    description: 'Official GitHub documentation for understanding GitHub features and best practices.',
    link: 'https://docs.github.com',
    image: 'https://blog.openreplay.com/images/building-professional-docs-sites-from-github-readme-files/images/hero.png',
    type: 'documentation'
  },
  {
    id: 2,
    title: 'React Documentation',
    description: 'The official React documentation for learning and mastering React.',
    link: 'https://reactjs.org/docs/getting-started.html',
    image: 'https://media.dev.to/cdn-cgi/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Faw3ofc8dmekid4ourweo.jpg',
    type: 'documentation'
  },
  {
    id: 3,
    title: 'Ant Design Docs',
    description: 'Ant Design documentation for using the Ant Design component library in your projects.',
    link: 'https://ant.design/docs/react/introduce',
    image: 'https://studio.uxpincdn.com/studio/wp-content/uploads/2022/11/Ant-Design.png.webp',
    type: 'documentation'
  },
  {
    id: 4,
    title: 'JavaScript Info',
    description: 'Modern JavaScript tutorial and guide.',
    link: 'https://javascript.info/',
    image: 'https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg?tx=w_1920,q_auto',
    type: 'documentation'
  },
  {
    id: 5,
    title: 'FreeCodeCamp',
    description: 'Learn to code with free resources, challenges, and projects.',
    link: 'https://www.freecodecamp.org/',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQNKFg9bKzsevdtPmdb7fLYZijKFwLcjxd4JY3-bCnxtQS3WZZCVXijDTined-AHoQCgA&usqp=CAU',
    type: 'documentation'
  },
  {
    id: 6,
    title: 'MDN Web Docs',
    description: 'Comprehensive resource for web technologies, including HTML, CSS, and JavaScript.',
    link: 'https://developer.mozilla.org/en-US/',
    image: 'https://static1.xdaimages.com/wordpress/wp-content/uploads/2022/03/moz_blog_header_MDN-Intro.jpg',
    type: 'documentation'
  },
  {
    id: 7,
    title: 'W3Schools',
    description: 'Learn web development with tutorials, references, and examples.',
    link: 'https://www.w3schools.com/',
    image: 'https://media.licdn.com/dms/image/D5612AQHdPlX2l2HXNA/article-cover_image-shrink_600_2000/0/1699401234451?e=2147483647&v=beta&t=kpOW6GAlGEueIYZx-lavKDFFtzPG0BpcfLPGzXfYw6k',
    type: 'documentation'
  },
  {
    id: 8,
    title: 'Understanding Git & GitHub',
    description: 'A beginner-friendly video tutorial on Git and GitHub.',
    link: 'https://www.youtube.com/watch?v=RGOj5yH7evk',
    image: 'https://img.youtube.com/vi/RGOj5yH7evk/maxresdefault.jpg',
    type: 'video'
  },
  {
    id: 9,
    title: 'React Crash Course',
    description: 'Learn React.js in this comprehensive crash course.',
    link: 'https://www.youtube.com/watch?v=w7ejDZ8SWv8',
    image: 'https://img.youtube.com/vi/w7ejDZ8SWv8/maxresdefault.jpg',
    type: 'video'
  },
  {
    id: 10,
    title: 'JavaScript Fundamentals',
    description: 'Deep dive into JavaScript fundamentals.',
    link: 'https://www.youtube.com/watch?v=5fb2aW2X8aY',
    image: 'https://static-assets.codecademy.com/assets/course-landing-page/meta/4x3/learn-javascript-fundamentals.jpg',
    type: 'video'
  },
  {
    id: 11,
    title: 'React Patterns',
    description: 'A blog post on best practices and patterns in React.',
    link: 'https://reactpatterns.com/',
    image: 'https://refine.ams3.cdn.digitaloceanspaces.com/blog/2023-10-17-react-patterns/social.png',
    type: 'blog'
  },
  {
    id: 12,
    title: 'JavaScript The Right Way',
    description: 'A guide to writing better JavaScript.',
    link: 'https://jstherightway.org/',
    image: 'https://ultimatecourses.com/assets/share/courses/javascript-51f65a000ac5f98e707cac1fbdf54c209529157ff399544518dba9c47b1f31da.png',
    type: 'blog'
  },
  {
    id: 13,
    title: 'CSS Tricks',
    description: 'A blog full of useful CSS tips and tricks.',
    link: 'https://css-tricks.com/',
    image: 'https://www.dilate.com.au/wp-content/uploads/2020/02/30-CSS-Tricks-Every-Web-Designer-Should-Know-Featured.jpg',
    type: 'blog'
  }
];

const cardStyle = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
};

const imageStyle = {
  height: '200px',
  objectFit: 'cover'
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const ResourceCard = ({ resource }) => (
  <motion.div 
    variants={itemVariants}
    style={{ height: '100%' }}
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.2 }}
  >
    <Card
      hoverable
      style={cardStyle}
      cover={<img alt={resource.title} src={resource.image} style={imageStyle} />}
      actions={[
        <Tooltip title="Open resource">
          <Button type="link" href={resource.link} target="_blank" rel="noopener noreferrer">
            {resource.type === 'video' ? 'Watch Video' : 'Learn More'}
          </Button>
        </Tooltip>
      ]}
      className="shadow-lg rounded-lg hover:shadow-xl transition-all duration-300"
    >
      <Meta 
        title={resource.title} 
        description={
          <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>
            {resource.description}
          </Paragraph>
        }
      />
    </Card>
  </motion.div>
);

const ResourcesPage = () => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Simulate API call with setTimeout
    const fetchResources = () => {
      setTimeout(() => {
        setResources(staticResources);
        setLoading(false);
      }, 1000); // Simulate 1 second loading time
    };

    fetchResources();
  }, []);

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filter === 'all' || resource.type === filter)
  );

  return (
    <div className='w-full min-h-screen p-6 bg-gradient-to-br from-blue-900 to-purple-900'>
      <Title level={2} className="text-center mb-6 text-white">Learning Resources</Title>
      
      <Row gutter={16} className="mb-6">
        <Col xs={24} sm={16}>
          <Search
            placeholder="Search resources..."
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%' }}
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col xs={24} sm={8}>
          <Select
            style={{ width: '100%' }}
            placeholder="Filter by type"
            onChange={(value) => setFilter(value)}
            defaultValue="all"
          >
            <Option value="all">All Resources</Option>
            <Option value="documentation">Documentation</Option>
            <Option value="video">Video Tutorials</Option>
            <Option value="blog">Blogs & Articles</Option>
          </Select>
        </Col>
      </Row>

      {loading ? (
        <div className="text-center">
          <Spin size="large" />
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <Row gutter={[16, 16]} justify="start">
              {filteredResources.map(resource => (
                <Col xs={24} sm={12} md={8} lg={6} key={resource.id} style={{ marginBottom: '16px' }}>
                  <ResourceCard resource={resource} />
                </Col>
              ))}
            </Row>
          </motion.div>
        </AnimatePresence>
      )}

      {!loading && filteredResources.length === 0 && (
        <div className="text-center text-white mt-8">
          <Title level={4}>No resources found. Try adjusting your search or filter.</Title>
        </div>
      )}
    </div>
  );
}

export default ResourcesPage;