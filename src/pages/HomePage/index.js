import React from 'react';
import TypingEffect from 'react-typing-effect';
import { Button, Card, Col, Row, Typography, Carousel } from 'antd';

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
        src: 'https://miro.medium.com/v2/resize:fit:1200/1*vPz_vIBOgLlcdge-FzJMVA.png',
        alt: 'Grow with Us',
    },
    {
        src: 'https://event-sponsorship.github.com/assets/images/hero-bg-23.jpeg',
        alt: 'GitHub Universe',
    },
    {
        src: 'https://media.licdn.com/dms/image/v2/C4D12AQFt3PVoxjvBeQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1612776307084?e=2147483647&v=beta&t=KXaYFtGbMwMqjF6LUxnAc-keQs8mC5eBydeh-0Fa4ww',
        alt: 'GitHub Open Source',
    },
];

const typingSpeed = 100;

const quotes = [
    {
        text: "GitHub has been an incredible platform for me to collaborate with developers around the world. It's a game-changer for open-source contributions.",
        author: "Linus Torvalds",
        title: "Creator of Linux",
    },
    {
        text: "GitHub provided me the tools to manage my open-source projects efficiently and connect with a global community of developers.",
        author: "Scott Hanselman",
        title: "Software Engineer & Advocate",
    },
    {
        text: "GitHub is where I found the collaboration and support I needed to advance my career and contribute to meaningful projects.",
        author: "Jessica McKellar",
        title: "Open Source Advocate & Software Engineer",
    },
    {
        text: "The power of open-source collaboration is amplified by platforms like GitHub. It’s been crucial for my professional growth.",
        author: "Matt Mullenweg",
        title: "Co-Founder of WordPress",
    },
    {
        text: "GitHub has enabled me to share my work with the world and collaborate with other passionate developers.",
        author: "Evan You",
        title: "Creator of Vue.js",
    },
    {
        text: "GitHub has transformed the way I approach open-source development and collaboration with others in the tech community.",
        author: "Brendan Eich",
        title: "Creator of JavaScript",
    },
];

const HomePage = () => {
    return (
        <div className="bg-gray-100 min-h-screen w-full">
            <div className="relative w-full h-screen">
                <Carousel autoplay effect="fade" className="absolute inset-0 w-full h-full">
                    {carouselItems.map((item, index) => (
                        <div key={index}>
                            <img 
                                src={item.src} 
                                alt={item.alt} 
                                className="w-full h-full object-cover" 
                            />
                        </div>
                    ))}
                </Carousel>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
                    <TypingEffect
                        text={['Welcome To GitHub Community!']}
                        speed={typingSpeed}
                        typingDelay={500}
                        cursorRenderer={cursor => <b>{cursor}</b>}
                        className="text-3xl md:text-7xl font-bold"
                    />
                    <Paragraph className="text-2xl mb-6 text-white">
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
                            cover={<img alt="Collaborate" src="/assets/cooperate-svgrepo-com.svg" className="w-16 h-16 mx-auto mt-4" />}
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
                            cover={<img alt="Learn" src="/assets/elearning-education-learn-svgrepo-com.svg" className="w-16 h-16 mx-auto mt-4" />}
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
                            cover={<img alt="Network" src='/assets/network-group-svgrepo-com.svg' className="w-16 h-16 mx-auto mt-4" />}
                        >
                            <Paragraph>
                                Connect with industry professionals, mentors, and peers to expand your network and collaborate on exciting projects.
                            </Paragraph>
                        </Card>
                    </Col>
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
