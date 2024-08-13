import React from 'react';
const teamMembers = [
  {
    id: 1,
    name: ' L E Chakrawarthy Sreenivas',
    role: 'President',
    bio: 'Chakrawarthy is the President, leading the team and overseeing all activities.',
    photo: 'https://via.placeholder.com/150' 
  },
  {
    id: 2,
    name: 'B Santosh',
    role: 'Vice President',
    bio: 'Santosh supports the President and helps in managing the team.',
    photo: 'https://via.placeholder.com/150' 
  },
  {
    id: 3,
    name: 'Deeksha Dakshayini',
    role: 'Secretary',
    bio: 'Deeksha handles documentation and internal communication.',
    photo: 'https://via.placeholder.com/150' 
  },
  {
    id: 4,
    name: 'Ram Sathya sai',
    role: 'Tech Lead',
    bio: 'Ram leads the technical team and manages the development process.',
    photo: 'https://via.placeholder.com/150'
  },
  {
    id: 5,
    name: 'Lakshmi Srujana V ',
    role: 'Inclusion Officer',
    bio: 'Lakshmi is responsible for promoting inclusivity and ensuring diverse representation.',
    photo: 'https://via.placeholder.com/150' 
  }
];

function TeamPage() {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {teamMembers.map(member => (
          <div key={member.id} className="border rounded-lg p-4 bg-white shadow-md">
            <img
              src={member.photo}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold">{member.name}</h3>
            <p className="text-sm text-gray-600">{member.role}</p>
            <p className="mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
