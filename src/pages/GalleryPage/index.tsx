import React from 'react';
import { Card, Col, Row } from 'antd';

const images = [
  {
    id: 1,
    title: 'Community Meetup',
    src: '/assets/meetup.jpg',
  },
  {
    id: 2,
    title: 'Workshop Event',
    src: '/assets/workshop.jpg',
  },
  {
    id: 3,
    title: 'Student Induction Program',
    src: '/assets/sip.png',
  },
  {
    id: 4,
    title: 'TechSpades Event',
    src: '/assets/TechS blank.png',
  },
  {
    id: 5,
    title: 'Tech Trivia',
    src: '/assets/tech trivia.png',
  },
  {
    id: 6,
    title: 'Web Development Bootcamp',
    src: '/assets/Slide 4.png',
  }
];
const GalleryPage = () => {
  return (
    <div className="p-8 bg-gradient-to-r from-blue-100 to-purple-100 min-h-screen">
      <h2 className="text-5xl font-bold text-center mb-12 text-gray-800">Gallery</h2>

      {/* Images Section */}
      <div>
        <h3 className="text-4xl font-semibold mb-8 text-gray-700">Photos</h3>
        <Row gutter={[16, 32]}>
          {images.map((image) => (
            <Col xs={24} sm={12} lg={8} key={image.id}>
              <Card
                cover={<img alt={image.title} src={image.src} className="w-full h-60 object-cover" />}
                bordered={false}
                className="transition-transform transform hover:scale-105 hover:shadow-lg"
              >
                <Card.Meta
                  title={image.title}
                  className="text-gray-800"
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default GalleryPage;