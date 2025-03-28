import React from 'react';
import '../styles/Header.css';

const Header = ({ showExitButton, onExitQuiz }) => {
  return (
    <header className="quiz-header">
      <h1 className="header-title">QUIZMania</h1>
      
      {showExitButton && (
        <button 
          className="exit-button"
          onClick={onExitQuiz}
        >
          Exit Quiz
        </button>
      )}
    </header>
  );
};

export default Header;