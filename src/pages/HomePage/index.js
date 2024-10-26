import React from 'react';
import { Button, Typography, Row, Col, Card } from 'antd';

const { Title, Paragraph } = Typography;

const HomePage = () => {
    return (
        <div className="bg-[#0d1117] text-white min-h-screen w-full font-sans">
            
            {/* Hero Section */}
            <section className="h-screen flex flex-col items-center justify-center text-center bg-[#161b22] p-8">
                <Title className="text-4xl md:text-6xl font-bold mb-4">
                    Welcome to the Tech Hub for Students
                </Title>
                <Paragraph className="text-lg md:text-2xl max-w-2xl text-gray-400">
                    Explore resources, connect with peers, and dive into projects designed to boost your skills in coding and open-source.
                </Paragraph>
                <Button type="primary" className="mt-8 bg-blue-600 hover:bg-blue-500 px-6 py-3 text-lg">
                    Get Started
                </Button>
            </section>

            {/* Quick Links */}
            <section className="py-16 bg-[#0d1117] text-center">
                <Title level={2} className="text-2xl md:text-3xl mb-8">Jump Right In</Title>
                <Row gutter={[16, 16]} justify="center">
                    {[
                        { title: "Tutorials", description: "Access step-by-step guides to get started." },
                        { title: "Events", description: "Join upcoming tech workshops and hackathons." },
                        { title: "Projects", description: "Contribute to open-source projects." },
                        { title: "Community", description: "Connect with fellow developers." }
                    ].map((item, index) => (
                        <Col xs={24} sm={12} md={6} key={index}>
                            <Card className="bg-[#161b22] text-white border-none hover:shadow-lg transition-shadow">
                                <Title level={3} className="text-xl">{item.title}</Title>
                                <Paragraph className="text-gray-400">{item.description}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>

            {/* Highlights Section */}
            <section className="py-16 bg-[#161b22] text-center">
                <Title level={2} className="text-2xl md:text-3xl mb-8">Why Join?</Title>
                <Row gutter={[16, 16]} justify="center">
                    {[
                        { title: "Learn", icon: "📘", description: "Access tutorials and resources." },
                        { title: "Build", icon: "💻", description: "Work on real-world projects." },
                        { title: "Collaborate", icon: "🤝", description: "Team up with other students." }
                    ].map((item, index) => (
                        <Col xs={24} sm={12} md={8} key={index}>
                            <Card className="bg-[#0d1117] border-none text-white shadow-md hover:shadow-xl transition-transform">
                                <div className="text-5xl mb-4">{item.icon}</div>
                                <Title level={3} className="text-xl">{item.title}</Title>
                                <Paragraph className="text-gray-400">{item.description}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </section>
        </div>
    );
};

export default HomePage;
