import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionForm from './QuestionForm';
import '../styles/QuizCreater.css';

const QuizCreator = () => {
  const [questions, setQuestions] = useState([]);
  const navigate = useNavigate();

  const handleAddQuestion = (question) => {
    setQuestions([...questions, question]);
  };

  const startQuiz = () => {
    navigate('/quiz', { state: { questions } });
  };

  return (
    <div className="container">
      <h2>Create an awesome quiz in minutes</h2>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <div className="quiz-preview">
        <h3>Quiz Preview</h3>
        {questions.length > 0 ? (
          <div className="cards">
            {questions.map((q, index) => (
              <div className="card" key={index}>
                <strong>{q.question}</strong>
                <ul>
                  {q.options.map((opt, i) => (
                    <li key={i}>{opt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <p>No questions added yet.</p>
        )}
      </div>
      {questions.length > 0 && (
        <button onClick={startQuiz} className="start-quiz-button">Start Quiz</button>
      )}
    </div>
  );
};

export default QuizCreator