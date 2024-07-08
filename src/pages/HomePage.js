import React from 'react';

const friendsData = [
  { name: 'Alice Johnson', skills: ['JavaScript', 'React', 'Node.js'] },
  { name: 'Bob Smith', skills: ['Python', 'Django', 'Machine Learning'] },
  { name: 'Charlie Brown', skills: ['Java', 'Spring', 'Microservices'] }
];

function HomePage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-800 text-white w-64 p-6 flex flex-col">
        <div className="mb-6">
          <img src="/path/to/logo.png" alt="Logo" className="w-full h-auto" />
        </div>
        <nav className="flex-grow">
          <a href="/home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</a>
          <a href="/network" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">My Network</a>
          <a href="/messaging" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Messaging</a>
          <a href="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Profile</a>
        </nav>
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-3xl mb-6">Welcome to the Home Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {friendsData.map((friend, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-2">{friend.name}</h2>
              <p className="text-gray-700">Skills:</p>
              <ul className="list-disc list-inside">
                {friend.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
