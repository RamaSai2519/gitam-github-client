"use client";

import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'L E Chakrawarthy Sreenivas',
    role: 'President',
    bio: 'As the President of the Gitam GitHub Community, Chakrawarthy leads the team with a vision for growth and innovation. He is responsible for overseeing all activities, setting strategic goals, and ensuring that the community thrives. His leadership and dedication drive the success of our initiatives.',
    photo: '/assets/President.jpeg'
  },
  {
    id: 2,
    name: 'B Santosh',
    role: 'Vice President',
    bio: 'Santosh supports the President in managing the community and its operations. He plays a crucial role in coordinating between different teams, implementing strategic plans, and ensuring smooth execution of our projects. His proactive approach and problem-solving skills are invaluable to our success.',
    photo: '/assets/VicePresident.jpg'
  },
  {
    id: 3,
    name: 'Deeksha Dakshayini',
    role: 'Secretary',
    bio: 'Deeksha handles all internal communications and documentation for the Gitam GitHub Community. She ensures that all records are maintained accurately and that communications are clear and timely. Her organizational skills help keep the team aligned and informed. And responsible for the outlook of the club.',
    photo: '/assets/Secretary.jpg'
  },
  {
    id: 4,
    name: 'Ram Sathya Sai',
    role: 'Tech Lead',
    bio: 'Ram is the Tech Lead responsible for guiding the technical team and managing the development of our projects. His expertise in technology and leadership ensures that our technical solutions are robust and innovative. Ram’s role is critical in driving the technical direction and solving complex challenges.',
    photo: '/assets/TechLead.jpg'
  },
  {
    id: 5,
    name: 'Lakshmi Srjuana V',
    role: 'Inclusion Officer',
    bio: 'Lakshmi is dedicated to promoting inclusivity within the Gitam GitHub Community. She works to ensure diverse representation and foster an environment where all voices are heard. Her efforts help create a welcoming and supportive atmosphere for everyone involved.',
    photo: '/assets/InclusionOfficer.jpg'
  },
];

const TeamPage: React.FC = () => {
  return (
    <div className="p-10">
      <h1 className="text-center text-2xl mb-10">Meet Our Team</h1>
      <div className='grid md:grid-cols-3 gap-4'>
        {teamMembers.map(member => (
          <Card
            key={member.id}
            hoverable
            cover={
              <div className="md:h-60 overflow-hidden rounded-lg flex items-center justify-center p-1">
                <img alt={member.name} src={member.photo} className="object-cover h-full w-full" />
              </div>
            }
            className="rounded-lg shadow-md flex flex-col"
          >
            <Meta
              title={member.name}
              description={member.role}
              className="mb-4"
            />
            <div className="flex-1 flex flex-col">
              <p className="mt-4 text-justify overflow-hidden overflow-ellipsis flex-1">
                {member.bio}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;