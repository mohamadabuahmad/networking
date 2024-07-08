import React from 'react';

const friendsData = [
  { name: 'Alice Johnson' },
  { name: 'Bob Smith' },
  { name: 'Charlie Brown' }
];

function MyNetworkPage() {
  return (
    <div className="flex min-h-screen">
      <div className="bg-gray-800 text-white w-64 p-6 flex flex-col">
        <nav className="flex-grow">
          <a href="/home" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Home</a>
          <a href="/network" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">My Network</a>
          <a href="/messaging" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Messaging</a>
          <a href="/profile" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">Profile</a>
        </nav>
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-3xl mb-6">My Network</h1>
        <ul className="space-y-4">
          {friendsData.map((friend, index) => (
            <li key={index} className="flex justify-between items-center bg-white p-6 rounded-lg shadow-md">
              <span>{friend.name}</span>
              <div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded mr-2">Chat</button>
                <button className="bg-red-600 text-white px-4 py-2 rounded">Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MyNetworkPage;
