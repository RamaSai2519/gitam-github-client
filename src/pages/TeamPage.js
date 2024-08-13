import React from 'react';
import { Card, Row, Col } from 'antd';

const { Meta } = Card;

const teamMembers = [
  {
    id: 1,
    name: 'L E Chakrawarthy Sreenivas',
    role: 'President',
    bio: 'As the President of the Gitam GitHub Community, Chakrawarthy leads the team with a vision for growth and innovation. He is responsible for overseeing all activities, setting strategic goals, and ensuring that the community thrives. His leadership and dedication drive the success of our initiatives.',
    photo: '/images/President.jpeg' 
  },
  {
    id: 2,
    name: 'B Santosh',
    role: 'Vice President',
    bio: 'Santosh supports the President in managing the community and its operations. He plays a crucial role in coordinating between different teams, implementing strategic plans, and ensuring smooth execution of our projects. His proactive approach and problem-solving skills are invaluable to our success.',
    photo: '/images/VicePresident.jpg' 
  },
  {
    id: 3,
    name: 'Deeksha Dakshayini',
    role: 'Secretary',
    bio: 'Deeksha handles all internal communications and documentation for the Gitam GitHub Community. She ensures that all records are maintained accurately and that communications are clear and timely. Her organizational skills help keep the team aligned and informed.And responsible for the outlook of the club.',
    photo: '/images/Secretary.jpg' 
  },
  {
    id: 4,
    name: 'Ram Sathya Sai',
    role: 'Tech Lead',
    bio: 'Ram is the Tech Lead responsible for guiding the technical team and managing the development of our projects. His expertise in technology and leadership ensures that our technical solutions are robust and innovative. Ram’s role is critical in driving the technical direction and solving complex challenges.',
    photo: '/images/TechLead.jpg' 
  },
  {
    id: 5,
    name: 'Lakshmi Srjuana V',
    role: 'Inclusion Officer',
    bio: 'Lakshmi is dedicated to promoting inclusivity within the Gitam GitHub Community. She works to ensure diverse representation and foster an environment where all voices are heard. Her efforts help create a welcoming and supportive atmosphere for everyone involved.',
    photo: '/images/InclusionOfficer.jpg' 
  },
];

function TeamPage() {
  return (
    <div style={{ padding: '30px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '30px' }}>Meet Our Team</h2>
      <Row gutter={[16, 16]}>
        {teamMembers.map(member => (
          <Col xs={24} sm={12} md={8} lg={6} key={member.id}>
            <Card
              hoverable
              cover={
                <div style={{ 
                  height: '200px', 
                  overflow: 'hidden', 
                  borderRadius: '10px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center' 
                }}>
                  <img 
                    alt={member.name} 
                    src={member.photo} 
                    style={{ 
                      height: '100%', 
                      width: 'auto', 
                      objectFit: 'cover', 
                      borderRadius: '10px' 
                    }} 
                  />
                </div>
              }
              style={{ 
                borderRadius: '10px', 
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                display: 'flex', 
                flexDirection: 'column' 
              }}
            >
              <Meta
                title={member.name}
                description={member.role}
                style={{ marginBottom: '10px' }}
              />
              <div style={{ 
                flex: '1', 
                display: 'flex', 
                flexDirection: 'column' 
              }}>
                <p style={{ 
                  marginTop: '10px', 
                  textAlign: 'justify', 
                  overflow: 'hidden', 
                  textOverflow: 'ellipsis', 
                  flex: '1' 
                }}>
                  {member.bio}
                </p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TeamPage;