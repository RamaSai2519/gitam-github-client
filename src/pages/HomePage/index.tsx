import React, { useState, useEffect } from 'react';
import { Button, Typography, Carousel, Card, Col, Row } from 'antd';
import ResourcesPage from '../ResourcesPage';
import ProjectPage from '../ProjectPage';
import TeamPage from '../TeamPage';
import raxios from '../../utils/axios_helper';

const { Title, Paragraph } = Typography;

interface Quote {
  text: string;
  author: string;
  title: string;
}

const carouselItems = [
  {
    src: 'https://event-sponsorship.github.com/assets/images/hero-bg-23.jpeg',
    alt: 'GitHub Universe',
  },
  {
    src: 'https://media.licdn.com/dms/image/v2/C4D12AQFt3PVoxjvBeQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1612776307084?e=2147483647&v=beta&t=KXaYFtGbMwMqjF6LUxnAc-keQs8mC5eBydeh-0Fa4ww',
    alt: 'GitHub Open Source',
  },
  {
    src: 'https://www.seozen.top/wp-content/uploads/2021/05/GitHub-headpic.jpeg',
    alt: 'Open Source Community',
  },
  {
    src: 'https://user-images.githubusercontent.com/6633808/160689302-3fe5e5d4-ba24-4525-8ed1-a8351ccbc0ef.png',
    alt: 'Collaborate and Innovate',
  },
  {
    src: 'https://miro.medium.com/v2/resize:fit:1200/1*vPz_vIBOgLlcdge-FzJMVA.png',
    alt: 'Grow with Us',
  },
];

const HomePage: React.FC = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  const fetchQuotes = async () => {
    try {
      const response = await raxios.get('/quotes');
      setQuotes(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen w-full">
      {/* Full-Screen Carousel with Dark Overlay */}
      <div className="relative min-h-screen w-full">
        <Carousel autoplay autoplaySpeed={6000} className="relative">
          {carouselItems.map((item, index) => (
            <div key={index} className="relative">
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-screen object-cover"
              />
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>
          ))}
        </Carousel>

        {/* Text Overlay on Image */}
        <div className="absolute p-5 inset-0 flex flex-col items-center justify-center text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white">
          <h1 className="text-center">Welcome To GitHub Community Club!</h1>
          <p className="text-center text-xl md:text-2xl lg:text-3xl mb-6 font-bold text-white">
            Join us in our mission to foster growth, collaboration, and innovation through open-source projects and community engagement.
          </p>
          <Button type="primary" size="large" href="/resources">
            Explore Resources
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="p-8">
        <Title level={2} className="text-center mb-8">What We Do</Title>
        <Row gutter={[16, 16]} justify="center">
          {[
            { title: "Collaborate", img: "/assets/cooperate-svgrepo-com.svg", description: "Engage with like-minded individuals on various projects and initiatives to make an impact through open-source contributions." },
            { title: "Learn", img: "/assets/elearning-education-learn-svgrepo-com.svg", description: "Access a wealth of resources, tutorials, and workshops to enhance your skills and stay updated with the latest in technology." },
            { title: "Network", img: "/assets/network-group-svgrepo-com.svg", description: "Connect with industry professionals, mentors, and peers to expand your network and collaborate on exciting projects." }
          ].map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card
                title={item.title}
                bordered={false}
                className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                cover={<img alt={item.title} src={item.img} className="w-16 h-16 mx-auto mt-4" />}
              >
                <Paragraph>{item.description}</Paragraph>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      {/* Success Stories Section */}
      <div className="bg-white p-8">
        <Title level={2} className="text-center mb-8">Success Stories</Title>
        <div className="overflow-x-clip">
          <div className="flex animate-slide">
            {[...quotes, ...quotes].map((quote, index) => (
              <div
                key={index}
                className="bg-white p-6 mx-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 max-w-xs"
              >
                <Paragraph className="italic text-gray-700">
                  "{quote.text}"
                </Paragraph>
                <Paragraph className="text-right font-bold text-gray-900">
                  - {quote.author}, {quote.title}
                </Paragraph>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-blue-500 text-white py-12">
        <div className="text-center">
          <Title level={2} className="mb-4">Join Us Today!</Title>
          <Paragraph className="mb-6">
            Be part of a dynamic community that is driving innovation and collaboration in the tech world. Whether you're a beginner or an experienced professional, there's a place for you here.
          </Paragraph>
          <Button type="primary" size="large" href="/contact">
            Get In Touch
          </Button>
        </div>
      </div>
      <ResourcesPage />
      <ProjectPage />
      <TeamPage />

      {/* GitHub Section */}
      <div className="p-8 text-center">
        <img src="/assets/gitamlogo.png" alt="GitHub" className="mx-auto h-20 mb-4" />
        <Title level={3}>Powered by GitHub</Title>
        <Paragraph>
          Discover the power of GitHub for your projects and learn how to contribute to the open-source community. Join us and be part of a global movement of innovation and collaboration.
        </Paragraph>
      </div>
    </div>
  );
};

export default HomePage;