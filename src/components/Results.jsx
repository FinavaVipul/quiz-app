import React from 'react';
import '../styles/Results.css';

const ResultScreen = ({ score, total, correct, incorrect, notAnswered, onRetake }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getResultData = () => {
    if (percentage >= 80) return { title: 'CONGRATULATIONS', subtitle: 'You successfully completed the Quiz and holds', message: 'Great job!', emoji: '✅' };
    if (percentage >= 60) return { title: 'WELL DONE', subtitle: 'You successfully completed the Quiz and holds', message: 'Nice work!', emoji: '✅' };
    return { title: 'KEEP PRACTICING!', subtitle: 'You successfully completed the Quiz but you need to', message: '', emoji: '😞' };
  };

  const { title, subtitle, message, emoji } = getResultData();

  return (
    <div className="result-screen">
      <div className="emoji">{emoji}</div>
      <h1>{title}</h1>
      <h5>{subtitle}</h5>
      
      
      <div className="score">
        <p>Your Score</p>
        <span>{percentage}%</span>
        <h2>{message}</h2>
      </div>

      <div className='result-box'>
      <div>Out of 10 question</div>
      <div className="stats">
        <div>
          <span className="stat correct">{correct}</span>
          Correct
        </div>
        <div>
          <span className="stat incorrect">{incorrect}</span>
          Incorrect
        </div>
        <div>
          <span className="stat unanswered">{notAnswered}</span>
          Not Answered
        </div>
      </div>
      </div>

      <button onClick={onRetake} className="retake-btn">
        Retake Quiz
      </button>
    </div>
  );
};

export default ResultScreen;