import React, { useState } from 'react';
import '../styles/QuestionForm.css';

const QuestionForm = ({ onAddQuestion }) => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAddOption = () => {
    if (option.trim()) {
      setOptions([...options, option]);
      setOption('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && options.length > 0 && answer) {
      onAddQuestion({ question, options, answer });
      setQuestion('');
      setOptions([]);
      setAnswer('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Question:</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
      </div>
      <div>
        <label>Options:</label>
        <input
          type="text"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        />
        <button type="button" onClick={handleAddOption}>Add Option</button>
        <ul>
          {options.map((opt, index) => (
            <li key={index}>{opt}</li>
          ))}
        </ul>
      </div>
      <div>
        <label>Answer:</label>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />
      </div>
      <button type="submit">Add Question</button>
    </form>
  );
};

export default QuestionForm;