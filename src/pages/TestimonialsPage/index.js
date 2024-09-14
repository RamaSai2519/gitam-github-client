import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Card, Rate, Divider, Modal, Tooltip, Input, Select, Tag, Typography, Button, Slider } from 'antd';
import { UserOutlined, LinkedinFilled, GithubFilled, SearchOutlined, FilterOutlined, StarOutlined } from '@ant-design/icons';
import Confetti from 'react-confetti';
import { motion, AnimatePresence } from 'framer-motion';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const testimonials = [
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

const TestimonialPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterRole, setFilterRole] = useState('All');
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleCardClick = useCallback((testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowConfetti(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedTestimonial(null);
    setShowConfetti(false);
  }, []);

  const filteredAndSortedTestimonials = useMemo(() => {
    return testimonials
      .filter(
        (testimonial) =>
          testimonial.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          testimonial.role.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((testimonial) => filterRole === 'All' || testimonial.role === filterRole)
      .filter((testimonial) => testimonial.rating >= minRating)
      .sort((a, b) => {
        if (sortBy === 'rating') return b.rating - a.rating;
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        return 0;
      });
  }, [searchTerm, filterRole, minRating, sortBy]);

  const paginatedTestimonials = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredAndSortedTestimonials.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredAndSortedTestimonials, currentPage]);

  const pageCount = Math.ceil(filteredAndSortedTestimonials.length / itemsPerPage);

  const roles = useMemo(() => ['All', ...new Set(testimonials.map((t) => t.role))], []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showConfetti]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="p-8 bg-gradient-to-br from-blue-100 to-purple-100 min-h-screen">
      {showConfetti && <Confetti recycle={false} numberOfPieces={200} />}

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-8 text-4xl font-bold text-blue-800">
          Voices of Our Community
        </Title>
      </motion.div>

      <div className="mb-8 flex flex-wrap justify-center items-center gap-4">
        <Search
          placeholder="Search testimonials"
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: 250 }}
          prefix={<SearchOutlined />}
        />
        <Select
          style={{ width: 200 }}
          placeholder="Filter by role"
          onChange={setFilterRole}
          defaultValue="All"
        >
          {roles.map((role) => (
            <Option key={role} value={role}>{role}</Option>
          ))}
        </Select>
        <div className="flex items-center">
          <Text className="mr-2">Min Rating:</Text>
          <Slider
            min={0}
            max={5}
            step={0.5}
            value={minRating}
            onChange={setMinRating}
            style={{ width: 150 }}
          />
        </div>
        <Select
          style={{ width: 150 }}
          placeholder="Sort by"
          onChange={setSortBy}
          defaultValue="default"
        >
          <Option value="default">Default</Option>
          <Option value="rating">Rating</Option>
          <Option value="name">Name</Option>
        </Select>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {paginatedTestimonials.map((testimonial) => (
          <motion.div key={testimonial.id} variants={cardVariants}>
            <Card
              hoverable
              className="h-full flex flex-col justify-between bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => handleCardClick(testimonial)}
            >
              <div>
                <div className="flex items-center mb-4">
                  <UserOutlined className="text-4xl text-blue-500 mr-4" />
                  <div>
                    <Title level={4} className="mb-0">{testimonial.name}</Title>
                    <Text type="secondary">{testimonial.role}</Text>
                  </div>
                </div>
                <Paragraph ellipsis={{ rows: 3 }}>{testimonial.message}</Paragraph>
              </div>
              <div className="mt-4">
                <Divider className="my-2" />
                <div className="flex justify-between items-center">
                  <Rate disabled defaultValue={testimonial.rating} />
                  <Tag color="blue">{testimonial.role}</Tag>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      <div className="flex justify-center mt-8">
        {Array.from({ length: pageCount }, (_, i) => (
          <Button
            key={i}
            type={currentPage === i + 1 ? 'primary' : 'default'}
            onClick={() => setCurrentPage(i + 1)}
            className="mx-1"
          >
            {i + 1}
          </Button>
        ))}
      </div>

      <AnimatePresence>
        {selectedTestimonial && (
          <Modal
            visible={!!selectedTestimonial}
            onCancel={handleCloseModal}
            footer={null}
            width={600}
            centered
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-center">
                <UserOutlined className="text-6xl text-blue-500 mb-4" />
                <Title level={2}>{selectedTestimonial.name}</Title>
                <Text type="secondary" className="text-lg mb-4 block">{selectedTestimonial.role}</Text>
                <Paragraph className="text-lg mb-6">{selectedTestimonial.detailedReview}</Paragraph>
                <div className="flex justify-center items-center">
                  <StarOutlined className="text-yellow-500 text-2xl mr-2" />
                  <span className="text-3xl font-bold">{selectedTestimonial.rating.toFixed(1)}</span>
                </div>
                <div className="mt-6 flex justify-center space-x-4">
                  <Tooltip title="LinkedIn Profile">
                    <Button icon={<LinkedinFilled />} shape="circle" />
                  </Tooltip>
                  <Tooltip title="GitHub Profile">
                    <Button icon={<GithubFilled />} shape="circle" />
                  </Tooltip>
                </div>
              </div>
            </motion.div>
          </Modal>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TestimonialPage;