import React, { useState, useEffect } from 'react';
import QuestionScreen from './QuestionScreen';
import '../styles/Quiz.css';

const Quiz = ({ category, onFinish }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(10);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          setCurrentIndex(currentIndex);
          handleNext();
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleAnswer = (answer) => {
    setAnswers(prev => ({ ...prev, [currentIndex]: answer }));
  };

  const handleNext = () => {
    if (currentIndex < category.questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setTimeLeft(10);
      setProgress(((currentIndex + 1) / category.questions.length) * 100);
    } else {
      calculateResults();
    }
  };

  const handleSkipQuestion = () => {
    handleNext();
  };


  const calculateResults = () => {
    let correct = 0, incorrect = 0, notAnswered = 0;
    
    category.questions.forEach((q, index) => {
      const answer = answers[index];
      if (!answer) notAnswered++;
      else if (answer === q.correctAnswer) correct++;
      else incorrect++;
    });

    onFinish({
      score: correct,
      total: category.questions.length,
      correct,
      incorrect,
      notAnswered
    });
  };

  return (
    <QuestionScreen
      question={category.questions[currentIndex]}
      current={currentIndex + 1}
      total={category.questions.length}
      timeLeft={timeLeft}
      progress={progress}
      onAnswer={handleAnswer}
      onNext={handleNext}
      onSkipQuestion={handleSkipQuestion}
      isLast={currentIndex === category.questions.length - 1}
    />
    
  );
};

export default Quiz;