import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import QuizCreator from './components/QuizCreator';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import './styles/App.css';
import Home from './components/home';
import Navbar from './components/navbar';


const App = () => {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-quiz" element={<QuizCreator />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultPage />} />
      </Routes>
    </Router>
    
  );
};

export default App;