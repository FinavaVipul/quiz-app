import React from 'react';
import '../styles/RulesPopup.css';

const RulesPopup = ({ onClose }) => {
  return (
    <div className="rules-popup">
      <div className="popup-content">
      <div className="modal-header">
          <h2>Quiz Rules</h2>
          <button className="close-icon" onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
        <div className="rules-section">
          <h3>10-Second Timer</h3>
          <ul>
            <li>Each question comes with a 10-second timer.</li>
            <li>If you don't answer within the time limit, the app will automatically move ti the next question.</li>
          </ul>
        </div>
        
        <div className="rules-section">
          <h3>Manual Navigation</h3>
          <ul>
            <li>You can navigation to the next question manually before the timer expires.</li>
            <li>Use the "Next" button to move ahead if you're ready before timer runs out.</li>
          </ul>
        </div>

        <div className="rules-section">
          <h3>Final Score and Performance Message</h3>
          <ul>
            <li>After all question are answered, your final score will be displayed.</li>
            <li>Based on your performace, you will receive a personalized message:</li>
                <ul>
                    <li>Greate job!: If you score <b>above 80%</b>.</li>
                    <li>Well done!: If you score <b>between 60% and 80%</b>.</li>
                    <li>Keep practicing!: If you score <b>below 60%</b>.</li>
                </ul>
          </ul>
        </div>
      </div>
    </div>
    
  );
};

export default RulesPopup;