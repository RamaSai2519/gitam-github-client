import React from 'react';
import TeamPage from '../TeamPage';
import { Button, Card, Col, Row, Typography, Carousel } from 'antd';
import TypingEffect from 'react-typing-effect'; 

const { Title, Paragraph } = Typography;

const carouselItems = [
    {
        src: 'https://www.seozen.top/wp-content/uploads/2021/05/GitHub-headpic.jpeg',
        alt: 'Open Source Community',
    },
    {
        src: 'https://user-images.githubusercontent.com/6633808/160689302-3fe5e5d4-ba24-4525-8ed1-a8351ccbc0ef.png',
        alt: 'Collaborate and Innovate',
    },
    {
        src: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ef7ceb6-65c7-4f52-9922-e4d9cc4c3af4_3840x2160.png',
        alt: 'Grow with Us',
    },
];

const typingSpeed = 100; // Speed of typing

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="text-center">
                <Carousel autoplay effect="fade">
                    {carouselItems.map((item, index) => (
                        <div key={index}>
                            <img src={item.src} alt={item.alt} className="carousel-image rounded-lg" />
                        </div>
                    ))}
                </Carousel>
                <div>
                    <TypingEffect
                        text={['Welcome To GitHub Community.!']}
                        speed={typingSpeed}                        typingDelay={500}
                        cursorRenderer={cursor => <b>{cursor}</b>}
                        className="text-3xl md:text-7xl font-bold"
                    />
                    <Paragraph className="text-2xl mb-6">
                        Join us in our mission to foster growth, collaboration, and innovation through open-source projects and community engagement.
                    </Paragraph>
                    <Button type="primary" size="large" href="/resources" className="mb-4">
                        Explore Resources
                    </Button>
                </div>
            </div>

            {/* Features Section */}
            <div className="p-8">
                <Title level={2} className="text-center mb-8">What We Do</Title>
                <Row gutter={[16, 16]} justify="center">
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            title="Collaborate"
                            bordered={false}
                            className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Paragraph>
                                Engage with like-minded individuals on various projects and initiatives to make an impact through open-source contributions.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            title="Learn"
                            bordered={false}
                            className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Paragraph>
                                Access a wealth of resources, tutorials, and workshops to enhance your skills and stay updated with the latest in technology.
                            </Paragraph>
                        </Card>
                    </Col>
                    <Col xs={24} sm={12} md={8}>
                        <Card
                            title="Network"
                            bordered={false}
                            className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <Paragraph>
                                Connect with industry professionals, mentors, and peers to expand your network and collaborate on exciting projects.
                            </Paragraph>
                        </Card>
                    </Col>
                </Row>
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

            {/* GitHub Section */}
            <div className="p-8 text-center">
                <img src="/assets/gitamlogo.png" alt="GitHub" className="mx-auto h-20 mb-4" />
                <Title level={3}>Powered by GitHub</Title>
                <Paragraph>
                    Discover the power of GitHub for your projects and learn how to contribute to the open-source community. Join us and be part of a global movement of innovation and collaboration.
                </Paragraph>
            </div>
            <TeamPage />
        </div>
    );
};

export default HomePage;