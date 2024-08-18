import React from 'react';
import { Card, Col, Row } from 'antd';

const videos = [
  {
    id: 1,
    title: 'What is GitHub?',
    url: 'https://www.youtube.com/embed/pBy1zgt0XPc',
  },
  {
    id: 2,
    title: 'How to Contribute to Open Source',
    url: 'https://www.youtube.com/embed/yzeVMecydCE',
  },
];

const images = [
  {
    id: 1,
    title: 'Community Meetup',
    src: `/assets/meetup.jpg`,
  },
  {
    id: 2,
    title: 'Workshop Event',
    src: `/assets/workshop.jpg`,
  },
];

function GalleryPage() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>

      {/* Videos Section */}
      <div className="mb-16">
        <h3 className="text-3xl font-semibold mb-8">Videos</h3>
        <Row gutter={16}>
          {videos.map((video) => (
            <Col xs={24} sm={12} lg={8} key={video.id}>
              <Card
                cover={
                  <div className="relative pb-[56.25%]">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={video.url}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                }
                bordered={false}
              >
                <Card.Meta title={video.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Images Section */}
      <div>
        <h3 className="text-3xl font-semibold mb-8">Photos</h3>
        <Row gutter={16}>
          {images.map((image) => (
            <Col xs={24} sm={12} lg={8} key={image.id}>
              <Card
                cover={<img alt={image.title} src={image.src} className="w-full h-auto" />}
                bordered={false}
              >
                <Card.Meta title={image.title} />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default GalleryPage;
