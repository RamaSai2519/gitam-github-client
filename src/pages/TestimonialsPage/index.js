import React, { useState, useEffect } from 'react';
import { Card, Rate, Divider, Modal } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Confetti from 'react-confetti';
import './TestimonialsPage.css'; 

const testimonials = [
  {
    id: 1,
    name: 'Sumayya',
    role: 'Full-Stack Developer',
    message: 'The Gitam GitHub Community has been pivotal in expanding my technical expertise and offering invaluable networking opportunities.',
    rating: 4.5,
    detailedReview: 'Joining the Gitam GitHub Community was one of the best decisions of my career. The connections I’ve made and the projects I’ve worked on have been incredibly fulfilling.',
  },
  {
    id: 2,
    name: 'Lakshmi',
    role: 'UI/UX Designer',
    message: 'Being a part of this community has greatly enhanced my design thinking and provided a platform to collaborate with like-minded individuals.',
    rating: 4,
    detailedReview: 'I’ve been able to refine my design skills and learn new techniques thanks to the collaborative environment within the Gitam GitHub Community.',
  },
  {
    id: 3,
    name: 'Greeshmitha',
    role: 'Front-End Developer',
    message: 'I’ve learned so much from the hands-on projects and workshops. The support from the community is unparalleled.',
    rating: 3.5,
    detailedReview: 'The hands-on projects gave me real-world experience that has been crucial in my development as a front-end developer.',
  },
  {
    id: 4,
    name: 'Thanmai',
    role: 'Data Scientist',
    message: 'The Gitam GitHub Community has opened doors to new technologies and advanced my understanding of data science.',
    rating: 4.2,
    detailedReview: 'Through this community, I’ve gained exposure to the latest data science tools and trends, helping me stay ahead in my field.',
  },
  {
    id: 5,
    name: 'Navya Nayaka',
    role: 'Machine Learning Engineer',
    message: 'The mentorship here has been a game-changer. I’ve gained confidence in applying machine learning concepts to real-world problems.',
    rating: 4.8,
    detailedReview: 'The mentorship and guidance provided here are second to none. I’ve applied what I’ve learned to various real-world projects.',
  },
  {
    id: 6,
    name: 'Amrutha Varsha',
    role: 'Cloud Engineer',
    message: 'The projects and collaborations have provided me with a strong foundation in cloud technologies. The community is extremely welcoming.',
    rating: 3.9,
    detailedReview: 'Collaborating on cloud projects has expanded my knowledge and given me a solid foundation to build upon in my career.',
  },
  {
    id: 7,
    name: 'Maithreyi',
    role: 'DevOps Engineer',
    message: 'The exposure to various DevOps tools and practices has been incredibly beneficial. The community\'s guidance has been instrumental in my growth.',
    rating: 4.7,
    detailedReview: 'The DevOps tools and practices I’ve learned here have been critical in my professional development and daily work.',
  },
  {
    id: 8,
    name: 'Prudhvi Reddy',
    role: 'Cybersecurity Analyst',
    message: 'This community has helped me delve deeper into cybersecurity practices and enhance my problem-solving skills.',
    rating: 4.6,
    detailedReview: 'I’ve developed a deeper understanding of cybersecurity and enhanced my problem-solving abilities thanks to the support from this community.',
  },
  {
    id: 9,
    name: 'Roopak',
    role: 'AI Researcher',
    message: 'The Gitam GitHub Community has provided me with the right resources and mentorship to explore cutting-edge AI technologies.',
    rating: 4.9,
    detailedReview: 'Exploring cutting-edge AI technologies has been made possible through the resources and mentorship available in this community.',
  },
];

function TestimonialPage() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCardClick = (testimonial) => {
    setSelectedTestimonial(testimonial);
    setShowConfetti(true);
  };

  const handleCloseModal = () => {
    setSelectedTestimonial(null);
    setShowConfetti(false);
  };

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 3000); 

      return () => clearTimeout(timer); 
    }
  }, [showConfetti]);

  return (
    <div className="relative p-8">
      {/* Confetti Effect */}
      {showConfetti && (
        <Confetti
          className="absolute top-0 left-0 w-full h-full z-50"
          recycle={false}
          numberOfPieces={300}
        />
      )}

      {/* Heading */}
      <div className="heading-container">
        <h2 className="heading-effect">
        Voices of Our Community.!
        </h2>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card
            key={testimonial.id}
            className="text-center transform transition-transform hover:scale-105 cursor-pointer"
            bordered={false}
            style={{
              borderRadius: '15px',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              padding: '20px',
            }}
            onClick={() => handleCardClick(testimonial)}
          >
            <div className="mb-6">
              <UserOutlined style={{ fontSize: '50px', color: '#1890ff' }} />
            </div>
            <h3 className="text-2xl font-semibold">{testimonial.name}</h3>
            <p className="text-lg text-gray-500">{testimonial.role}</p>
            <Divider />
            <p className="text-base text-gray-700 mb-6">{testimonial.message}</p>
            <Rate disabled value={testimonial.rating} />
          </Card>
        ))}
      </div>

      {/* Detailed Review Modal */}
      <Modal
        open={!!selectedTestimonial}
        footer={null}
        onCancel={handleCloseModal}
        centered
        className="modal-glass-effect"
        style={{ padding: '0' }}
      >
        <div className="p-8 text-center">
          {selectedTestimonial && (
            <div>
              <div className="mb-6">
                <UserOutlined style={{ fontSize: '50px', color: '#1890ff' }} />
              </div>
              <h3 className="text-2xl font-semibold">{selectedTestimonial.name}</h3>
              <p className="text-lg text-gray-500">{selectedTestimonial.role}</p>
              <Divider />
              <p className="text-base text-gray-700 mb-6">{selectedTestimonial.detailedReview}</p>
              <Rate disabled value={selectedTestimonial.rating} />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
}

export default TestimonialPage;
