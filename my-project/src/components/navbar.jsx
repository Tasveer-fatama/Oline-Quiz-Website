import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate('/'); // Navigate to the home page
  };

  const handleCreateQuizClick = () => {
    navigate('/create-quiz'); // Navigate to the create quiz page
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">QuizTime</div>
      <div className="navbar-buttons">
        <button onClick={handleHomeClick} className="navbar-button">Home</button>
        <button onClick={handleCreateQuizClick} className="navbar-button">Create your Quiz</button>
        
      </div>
    </nav>
  );
};

export default Navbar;