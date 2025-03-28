import React, { useState } from 'react';
import Header from './components/Header';
import WelcomeScreen from './components/WelcomeScreen';
import ResultScreen from './components/Results';
import Quiz from './components/Quiz';
import questionsData from './data/questions.json';
import './styles/App.css';

function App() {
  const [quizState, setQuizState] = useState({
    started: false,
    userData: null,
    results: null
  });

  const handleStartQuiz = (name, categoryId) => {
    const category = questionsData.categories.find(cat => cat.id === categoryId);
    setQuizState({
      started: true,
      userData: { name, category },
      results: null
    });
  };

  const handleQuizFinish = (results) => {
    setQuizState(prev => ({
      ...prev,
      started: false,
      results
    }));
  };

  const handleRetake = () => {
    setQuizState({
      started: false,
      userData: null,
      results: null
    });
  };

  return (
    <div className="app-container">
      <Header 
        showExitButton={quizState.started}
        onExitQuiz={() => setQuizState({
          started: false,
          userData: null,
          results: null
        })}
      />
      {!quizState.started && !quizState.results ? (
        <WelcomeScreen
          categories={questionsData.categories}
          onStart={handleStartQuiz}
        />
      ) : quizState.results ? (
        <ResultScreen
          {...quizState.results}
          onRetake={handleRetake}
        />
      ) : (
        <Quiz
          category={quizState.userData.category}
          onFinish={handleQuizFinish}
        />
      )}
    </div>
  );
}

export default App;
