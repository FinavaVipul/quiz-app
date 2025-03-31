import React, { useState } from 'react';
import RulesPopup from './RulesPopup';
import '../styles/WelcomeScreen.css';

const WelcomeScreen = ({ categories, onStart }) => {
    const [fullName, setFullName] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
  const [showRules, setShowRules] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (fullName && selectedCategory) onStart(fullName, selectedCategory);
  };

  return (
    <div className="welcome-container">
        <h1>Welcome to <span className='font-1'>QUIZ</span><span className='font-2'>Mania</span></h1>
        <div className='rules'>
            <p>Please read all the rules about this quiz before you start.</p>
            <button className='btn-rules' onClick={() => setShowRules(true)} >
                Quiz rules
            </button>
        </div>

        <form onSubmit={handleSubmit} className='categoty-section'>
            <label>Full Name</label>
            <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            />
            
            <div className="category-group">
            {categories.map((cat) => (
                <label key={cat.id}>
                <input
                    type="radio"
                    name="category"
                    value={cat.id}
                    checked={selectedCategory  === cat.id}
                    onChange={() => setSelectedCategory(cat.id)}
                />
                {cat.name}
                </label>
            ))}
            </div>

            <button type="submit" 
            className="start-button" disabled={!fullName || !selectedCategory}>Start Quiz</button>
        </form>

      {showRules && (
        <RulesPopup
          onClose={() => setShowRules(false)}
        />
      )}
    </div>
  );
};

export default WelcomeScreen;