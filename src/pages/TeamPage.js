import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: 'L E Chakrawarthy Sreenivas',
    role: 'President',
    bio: 'Chakrawarthy is the President, leading the team and overseeing all activities.',
    photo: 'https://via.placeholder.com/150' // Replace with actual photo URL
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
    name: 'Ram Sathya Sai',
    role: 'Tech Lead',
    bio: 'Ram leads the technical team and manages the development process.',
    photo: 'https://via.placeholder.com/150' 
  },
  {
    id: 5,
    name: 'Lakshmi Srujana V',
    role: 'Inclusion Officer',
    bio: 'Lakshmi is responsible for promoting inclusivity and ensuring diverse representation.',
    photo: 'https://via.placeholder.com/150' 
  }
];

function TeamPage() {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teamMembers.map(member => (
          <div key={member.id} className="border border-gray-300 rounded-lg p-6 bg-white shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl">
            <img
              src={member.photo}
              alt={member.name}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-200 shadow-md"
            />
            <h3 className="text-xl font-semibold text-center text-gray-900">{member.name}</h3>
            <p className="text-sm text-center text-gray-600">{member.role}</p>
            <p className="mt-3 text-gray-700 text-center">{member.bio}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamPage;
