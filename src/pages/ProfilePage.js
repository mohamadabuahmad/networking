import React, { useState } from 'react';

function ProfilePage() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.documentElement.classList.toggle('dark');
  };

  const signOut = () => {
    // Implement sign-out logic
    console.log('Signed out');
  };

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
        <h1 className="text-3xl mb-6">Profile</h1>
        <div className="space-y-4">
          <button onClick={toggleTheme} className="bg-blue-600 text-white px-4 py-2 rounded">
            Toggle Theme
          </button>
          <button onClick={signOut} className="bg-red-600 text-white px-4 py-2 rounded">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
