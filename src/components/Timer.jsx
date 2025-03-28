import React, { useEffect, useState } from 'react';
import '../styles/Timer.css';

const Timer = ({ initialTime, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          onTimeUp();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onTimeUp]);

  return (
    <div className="timer-container">
      <div className="timer-progress" style={{ width: `${(timeLeft/initialTime)*100}%` }}></div>
      <span className="timer-text">{timeLeft}s</span>
    </div>
  );
};

export default Timer;