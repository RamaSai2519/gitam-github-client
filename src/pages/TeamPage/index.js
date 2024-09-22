import React from 'react';
import { Card, Typography, Tooltip } from 'antd';
import { motion } from 'framer-motion';
import { GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph } = Typography;

const teamMembers = [
  {
    id: 1,
    name: 'L E Chakrawarthy Sreenivas',
    role: 'President',
    bio: 'As the President of the Gitam GitHub Community, Chakrawarthy leads the team with a vision for growth and innovation. He is responsible for overseeing all activities, setting strategic goals, and ensuring that the community thrives. His leadership and dedication drive the success of our initiatives.',
    photo: '/assets/President.jpeg',
    github: 'https://github.com/chakrawarthy',
    linkedin: 'https://linkedin.com/in/chakrawarthy',
    email: 'chakrawarthy@example.com'
  },
  {
    id: 2,
    name: 'B Santosh',
    role: 'Vice President',
    bio: 'Santosh supports the President in managing the community and its operations. He plays a crucial role in coordinating between different teams, implementing strategic plans, and ensuring smooth execution of our projects. His proactive approach and problem-solving skills are invaluable to our success.',
    photo: '/assets/VicePresident.jpg',
    github: 'https://github.com/santosh',
    linkedin: 'https://linkedin.com/in/santosh',
    email: 'santosh@example.com'
  },
  {
    id: 3,
    name: 'Deeksha Dakshayini',
    role: 'Secretary',
    bio: 'Deeksha handles all internal communications and documentation for the Gitam GitHub Community. She ensures that all records are maintained accurately and that communications are clear and timely. Her organizational skills help keep the team aligned and informed. She is also responsible for the outlook of the club.',
    photo: '/assets/Secretary.jpg',
    github: 'https://github.com/deeksha',
    linkedin: 'https://linkedin.com/in/deeksha',
    email: 'deeksha@example.com'
  },
  {
    id: 4,
    name: "Rama Sathya Sai",
    role: "Tech Lead",
    bio: "Rama is responsible for overseeing the technical aspects of the Gitam GitHub Community. He leads the development of projects, manages technical resources, and ensures that our initiatives are implemented successfully. His expertise and guidance are instrumental in driving innovation and excellence within the community.",
    photo: '/assets/TechLead.jpg',
    github: "https://github.com/ramasai2519",
    linkedin: "https://www.linkedin.com/in/rama-sathya-sai-82140a293/",
    email: "rchandik@gitam.in"
  },
  {
    id: 5,
    name: 'Lakshmi Srjuana V',
    role: 'Inclusion Officer',
    bio: 'Lakshmi is dedicated to promoting inclusivity within the Gitam GitHub Community. She works to ensure diverse representation and foster an environment where all voices are heard. Her efforts help create a welcoming and supportive atmosphere for everyone involved.',
    photo: '/assets/InclusionOfficer.jpg',
    github: 'https://github.com/lakshmisrjuana',
    linkedin: 'https://linkedin.com/in/lakshmisrjuana',
    email: 'lakshmisrjuana@example.com'
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

function TeamPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <Title level={1} className="text-center mb-12">Meet Our Exceptional Team</Title>
        <Paragraph className="text-center text-lg mb-16">
          Dedicated individuals driving innovation and collaboration in the Gitam GitHub Community.
        </Paragraph>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1 }}
            >
              <Card
                hoverable
                cover={
                  <div className="h-64 overflow-hidden rounded-t-lg">
                    <img
                      alt={member.name}
                      src={member.photo}
                      className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
                    />
                  </div>
                }
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Meta
                  title={<Title level={3}>{member.name}</Title>}
                  description={<Title level={4} type="secondary">{member.role}</Title>}
                  className="mb-4"
                />
                <Paragraph className="text-sm text-gray-600 mb-4" ellipsis={{ rows: 3, expandable: true, symbol: 'Read more' }}>
                  {member.bio}
                </Paragraph>
                <div className="flex justify-center space-x-4">
                  <Tooltip title="GitHub">
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <GithubOutlined className="text-2xl text-gray-700 hover:text-blue-500 transition-colors" />
                    </a>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedinOutlined className="text-2xl text-gray-700 hover:text-blue-500 transition-colors" />
                    </a>
                  </Tooltip>
                  <Tooltip title="Email">
                    <a href={`mailto:${member.email}`}>
                      <MailOutlined className="text-2xl text-gray-700 hover:text-blue-500 transition-colors" />
                    </a>
                  </Tooltip>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamPage;