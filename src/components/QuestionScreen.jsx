import React, {useState} from 'react';
import '../styles/QuestionScreen.css';

const QuestionScreen = ({ question, current, total, timeLeft, progress, onAnswer, onNext, onSkipQuestion, isLast }) => {
  const [selected, setSelected] = useState(null);
  const handleSelect = (index) => {
    setSelected(index);
    onAnswer(question.options[index][0]);
  };

  return (
    <div className="question-screen">
      <div className="header">
        <span>Question {current} / {total}</span>
        <span className="timer">⏳ {timeLeft}s</span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-fill" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <h2>{question.question}</h2>

      <div className="options">
        {question.options.map((opt, index) => (
          <button
            key={index}
            className={`option ${selected === index ? 'selected' : ''}`}
            onClick={() => handleSelect(index)}
          >
            {opt}
          </button>
        ))}
      </div>

      <div>
        <button className='next-btn' onClick={onNext} disabled={selected === null && timeLeft > 0}>
          {isLast ? 'Finish' : 'Next'}
        </button>
        <button 
          className="skip-btn"
          onClick={onSkipQuestion}
        >
          Skip this question
        </button>
      </div>
    </div>
  );
};

export default QuestionScreen;