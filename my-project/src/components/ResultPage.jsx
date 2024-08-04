import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/ResultPage.css';

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 1 };
  const passingScore = 0.7 * total;

  return (
    <div className="result-page">
      <h2>Quiz Results</h2>
      <div className="result-container">
        <p className="score">Your Score: {((score / total) * 100).toFixed(2)}%</p>
        <p>Your Points: {score} / {total}</p>
        {score >= passingScore ? (
          <p className="pass-message">Nice job, you passed!</p>
        ) : (
          <p className="fail-message">You did not pass. Better luck next time!</p>
        )}
      </div>
      <button onClick={() => window.location.href = '/'}>Back to Home</button>
    </div>
  );
};

export default ResultPage;