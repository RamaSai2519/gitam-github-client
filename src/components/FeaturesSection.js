import React from 'react';
import { Card, Col, Row } from 'antd';

const FeatureCard = React.memo(({ title, img, description }) => (
    <Card
        title={title}
        bordered={false}
        className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
        cover={<img alt={title} src={img} className="w-16 h-16 mx-auto mt-4" />}
    >
        <p>{description}</p>
    </Card>
));

const FeaturesSection = ({ features }) => (
    <Row gutter={[16, 16]} justify="center">
        {features.map((item, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
                <FeatureCard {...item} />
            </Col>
        ))}
    </Row>
);

export default React.memo(FeaturesSection);