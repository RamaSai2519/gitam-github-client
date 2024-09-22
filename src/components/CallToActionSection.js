import React from 'react';
import { Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const CallToActionSection = ({ onContactClick }) => (
    <section aria-label="Call to Action" className="bg-blue-500 text-white py-12">
        <div className="text-center">
            <Title level={2} className="mb-4">Join Us Today!</Title>
            <Paragraph className="mb-6">
                Be part of a dynamic community that is driving innovation and collaboration in the tech world. Whether you're a beginner or an experienced professional, there's a place for you here.
            </Paragraph>
            <Button type="primary" size="large" onClick={onContactClick}>
                Get In Touch
            </Button>
        </div>
    </section>
);

export default React.memo(CallToActionSection);