import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Timer from './Timer';
import '../styles/QuizPage.css';

const QuizPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const questions = location.state?.questions || [];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [score, setScore] = useState(1);

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedAnswer(answer);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigate('/results', { state: { score, total: questions.length } });
    }
  };

  if (questions.length === 0) {
    return <p>No questions available. Please create a quiz first.</p>;
  }

  return (
    <div className="container">
      <Timer />
      <div className="quiz-question">
        <h2>{questions[currentQuestionIndex].question}</h2>
        <div className="options">
          {questions[currentQuestionIndex].options.map((opt, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(opt)}
              className="option-button"
            >
              {opt}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizPage;