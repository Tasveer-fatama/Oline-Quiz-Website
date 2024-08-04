import React from 'react';
import '../styles/Timer.css';

const Timer = () => {
  const [time, setTime] = React.useState(60); // 60 seconds timer

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(interval);
          // Handle timer end (e.g., redirect to results)
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="timer">
      <h3>Time Left: {time}s</h3>
    </div>
  );
};

export default Timer;