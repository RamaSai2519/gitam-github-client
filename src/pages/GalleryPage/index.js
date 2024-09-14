import React, { useState } from 'react';
import { Card, Col, Row, Modal, Button, Typography } from 'antd';
import { motion } from 'framer-motion';
import { ZoomInOutlined, LeftOutlined, RightOutlined, CloseOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const images = [
  {
    id: 1,
    title: 'Community Meetup',
    src: '/assets/meetup.jpg',
    description: 'Our vibrant community coming together to share ideas and experiences.'
  },
  {
    id: 2,
    title: 'Workshop Event',
    src: '/assets/workshop.jpg',
    description: 'Hands-on learning experience with industry experts guiding participants.'
  },
  {
    id: 3,
    title: 'Student Induction Program',
    src: '/assets/sip.png',
    description: 'Welcoming new members to our tech community with an engaging orientation.'
  },
  {
    id: 4,
    title: 'TechSpades Event',
    src: '/assets/TechS blank.png',
    description: 'Showcasing cutting-edge technologies and innovations in our flagship event.'
  },
  {
    id: 5,
    title: 'Tech Trivia',
    src: '/assets/tech trivia.png',
    description: 'Testing and expanding knowledge through fun and challenging tech quizzes.'
  },
  {
    id: 6,
    title: 'Web Development Bootcamp',
    src: '/assets/Slide 4.png',
    description: 'Intensive training program for aspiring web developers to hone their skills.'
  }
];

const GalleryPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const showModal = (index) => {
    setCurrentImage(index);
    setModalVisible(true);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="p-8 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 min-h-screen">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Title level={1} className="text-center mb-12 text-white">
          Our Vibrant Community Gallery
        </Title>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row gutter={[24, 24]}>
          {images.map((image, index) => (
            <Col xs={24} sm={12} lg={8} key={image.id}>
              <motion.div variants={itemVariants}>
                <Card
                  hoverable
                  cover={
                    <div className="relative overflow-hidden group">
                      <img 
                        alt={image.title} 
                        src={image.src} 
                        className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <ZoomInOutlined className="text-white text-4xl" />
                      </div>
                    </div>
                  }
                  onClick={() => showModal(index)}
                  className="shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <Card.Meta
                    title={<span className="text-lg font-semibold">{image.title}</span>}
                    description={<Paragraph ellipsis={{ rows: 2 }}>{image.description}</Paragraph>}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>

      <Modal
        visible={modalVisible}
        onCancel={handleCancel}
        footer={null}
        width="80%"
        centered
        closeIcon={<CloseOutlined className="text-white text-xl" />}
        bodyStyle={{ padding: 0, backgroundColor: 'transparent' }}
        wrapClassName="bg-black bg-opacity-90"
      >
        <div className="relative">
          <img
            src={images[currentImage].src}
            alt={images[currentImage].title}
            className="w-full max-h-[80vh] object-contain"
          />
          <div className="absolute top-4 left-4 right-4">
            <Title level={3} className="text-white m-0">{images[currentImage].title}</Title>
            <Paragraph className="text-white mt-2">{images[currentImage].description}</Paragraph>
          </div>
          <Button
            icon={<LeftOutlined />}
            onClick={prevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2"
          />
          <Button
            icon={<RightOutlined />}
            onClick={nextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
          />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryPage;