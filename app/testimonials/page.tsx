"use client";

import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Typography, Input, Select, Tooltip, Button, Spin } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

const { Meta } = Card;
const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

interface Resource {
  id: number;
  name: string;
  role: string;
  message: string;
  rating: number;
  detailedReview: string;
}

const staticResources: Resource[] = [
  {
    id: 1,
    name: 'Sumayya',
    role: 'Full-Stack Developer',
    message: 'The Gitam GitHub Community has been pivotal in expanding my technical expertise and offering invaluable networking opportunities.',
    rating: 4.5,
    detailedReview: 'Joining the Gitam GitHub Community was one of the best decisions of my career. The connections I’ve made and the projects I’ve worked on have been incredibly fulfilling.',
  },
  {
    id: 2,
    name: 'Lakshmi',
    role: 'UI/UX Designer',
    message: 'Being a part of this community has greatly enhanced my design thinking and provided a platform to collaborate with like-minded individuals.',
    rating: 4,
    detailedReview: 'I’ve been able to refine my design skills and learn new techniques thanks to the collaborative environment within the Gitam GitHub Community.',
  },
  {
    id: 3,
    name: 'Greeshmitha',
    role: 'Front-End Developer',
    message: 'I’ve learned so much from the hands-on projects and workshops. The support from the community is unparalleled.',
    rating: 3.5,
    detailedReview: 'The hands-on projects gave me real-world experience that has been crucial in my development as a front-end developer.',
  },
  {
    id: 4,
    name: 'Thanmai',
    role: 'Data Scientist',
    message: 'The Gitam GitHub Community has opened doors to new technologies and advanced my understanding of data science.',
    rating: 4.2,
    detailedReview: 'Through this community, I’ve gained exposure to the latest data science tools and trends, helping me stay ahead in my field.',
  },
  {
    id: 5,
    name: 'Navya Nayaka',
    role: 'Machine Learning Engineer',
    message: 'The mentorship here has been a game-changer. I’ve gained confidence in applying machine learning concepts to real-world problems.',
    rating: 4.8,
    detailedReview: 'The mentorship and guidance provided here are second to none. I’ve applied what I’ve learned to various real-world projects.',
  },
  {
    id: 6,
    name: 'Amrutha Varsha',
    role: 'Cloud Engineer',
    message: 'The projects and collaborations have provided me with a strong foundation in cloud technologies. The community is extremely welcoming.',
    rating: 3.9,
    detailedReview: 'Collaborating on cloud projects has expanded my knowledge and given me a solid foundation to build upon in my career.',
  },
  {
    id: 7,
    name: 'Maithreyi',
    role: 'DevOps Engineer',
    message: 'The exposure to various DevOps tools and practices has been incredibly beneficial. The community\'s guidance has been instrumental in my growth.',
    rating: 4.7,
    detailedReview: 'The DevOps tools and practices I’ve learned here have been critical in my professional development and daily work.',
  },
  {
    id: 8,
    name: 'Prudhvi Reddy',
    role: 'Cybersecurity Analyst',
    message: 'This community has helped me delve deeper into cybersecurity practices and enhance my problem-solving skills.',
    rating: 4.6,
    detailedReview: 'I’ve developed a deeper understanding of cybersecurity and enhanced my problem-solving abilities thanks to the support from this community.',
  },
  {
    id: 9,
    name: 'Roopak',
    role: 'AI Researcher',
    message: 'The Gitam GitHub Community has provided me with the right resources and mentorship to explore cutting-edge AI technologies.',
    rating: 4.9,
    detailedReview: 'Exploring cutting-edge AI technologies has been made possible through the resources and mentorship available in this community.',
  },
];

const cardStyle: React.CSSProperties = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column'
};

const imageStyle: React.CSSProperties = {
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

interface ResourceCardProps {
  resource: Resource;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource }) => (
  <motion.div variants={itemVariants}>
    <Card
      hoverable
      style={cardStyle}
      cover={<img alt={resource.title} src={resource.image} style={imageStyle} />}
    >
      <Meta
        title={<a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a>}
        description={
          <Tooltip title={resource.description}>
            <Paragraph ellipsis={{ rows: 2 }}>{resource.description}</Paragraph>
          </Tooltip>
        }
      />
    </Card>
  </motion.div>
);

const ResourcesPage: React.FC = () => {
  const [resources, setResources] = useState<Resource[]>(staticResources);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterType, setFilterType] = useState<string>('all');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // Simulating API call
    setLoading(true);
    setTimeout(() => {
      setResources(staticResources);
      setLoading(false);
    }, 1000);
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  const handleFilter = (value: string) => {
    setFilterType(value);
  };

  const filteredResources = resources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || resource.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 min-h-screen">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-12 text-white">
          Resources
        </Title>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center items-center gap-4">
        <Search
          placeholder="Search resources"
          onSearch={handleSearch}
          style={{ width: 300 }}
          className="mb-4 sm:mb-0"
        />
        <Select
          defaultValue="all"
          style={{ width: 200 }}
          onChange={handleFilter}
          className="mb-4 sm:mb-0"
        >
          <Option value="all">All Types</Option>
          <Option value="documentation">Documentation</Option>
          <Option value="video">Video</Option>
          <Option value="blog">Blog</Option>
        </Select>
      </div>

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
            <Row gutter={[24, 24]}>
              {filteredResources.map((resource) => (
                <Col xs={24} sm={12} md={8} lg={6} key={resource.id}>
                  <ResourceCard resource={resource} />
                </Col>
              ))}
            </Row>
          </motion.div>
        </AnimatePresence>
      )}

      {!loading && filteredResources.length === 0 && (
        <div className="text-center text-white mt-8">
          <Title level={3} className="text-white">No resources found</Title>
          <Paragraph className="text-white">Try adjusting your search or filter criteria</Paragraph>
        </div>
      )}
    </div>
  );
};

export default ResourcesPage;