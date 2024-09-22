import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const GitHubSection = () => (
    <section aria-label="GitHub Information" className="p-8 text-center">
        <img src="/assets/gitamlogo.png" alt="GitHub" className="mx-auto h-20 mb-4" />
        <Title level={3}>Powered by GitHub</Title>
        <Paragraph>
            Discover the power of GitHub for your projects and learn how to contribute to the open-source community. Join us and be part of a global movement of innovation and collaboration.
        </Paragraph>
    </section>
);

export default React.memo(GitHubSection);