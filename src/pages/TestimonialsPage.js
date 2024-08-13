import React from 'react';
import { Card, Rate, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const testimonials = [
  {
    id: 1,
    name: 'Sumayya',
    role: 'Developer',
    message: 'The Gitam GitHub Community has been incredibly supportive and resourceful. The projects and mentorship opportunities have helped me grow as a developer.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Lakshmi',
    role: 'Designer',
    message: 'Joining this community was one of the best decisions I made. The collaborative environment and skill-building workshops have significantly boosted my design skills.',
    rating: 4,
  },
  {
    id: 3,
    name: 'Greeshmitha',
    role: 'Student',
    message: 'The Gitam GitHub Community offers a fantastic platform for learning and networking. The projects and events are well-organized and provide great exposure to new technologies.',
    rating: 5,
  },
];

function TestimonialPage() {
  return (
    <div className="p-8">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Members Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map(testimonial => (
          <Card
            key={testimonial.id}
            className="text-center"
            bordered={false}
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
          >
            <div className="mb-4">
              <UserOutlined style={{ fontSize: '40px', color: '#1890ff' }} />
            </div>
            <h3 className="text-xl font-semibold">{testimonial.name}</h3>
            <p className="text-lg text-gray-600">{testimonial.role}</p>
            <Divider />
            <p className="text-base text-gray-800 mb-4">{testimonial.message}</p>
            <Rate disabled value={testimonial.rating} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TestimonialPage;