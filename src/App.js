import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import MyNetworkPage from './pages/MyNetworkPage';
import MessagingPage from './pages/MessagingPage';
import ProfilePage from './pages/ProfilePage';
import SkillsPage from './pages/SkillsPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (email, password) => {
    if (email === 'user@example.com' && password === 'password') {
      setIsLoggedIn(true);
    }
  };

  const register = (user) => {
    console.log('Registered user:', user);
    setIsLoggedIn(true);
  };

  const saveSkills = (skills) => {
    console.log('Saved skills:', skills);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage onLogin={login} />} />
        <Route path="/register" element={<RegisterPage onRegister={register} />} />
        <Route path="/skills" element={isLoggedIn ? <SkillsPage onSaveSkills={saveSkills} /> : <Navigate to="/login" />} />
        <Route path="/home" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/network" element={isLoggedIn ? <MyNetworkPage /> : <Navigate to="/login" />} />
        <Route path="/messaging" element={isLoggedIn ? <MessagingPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
