import { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsPaused(false);
    setIsActive(true);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setTime(0);
    setIsActive(false);
  };

  const formatString = (value) => {
    return value.slice(-2);
  };

  return (
    <div className="container">
      <div className="wrapper-digits">
        <span className="digits">
          {formatString("0" + Math.floor((time / 60000) % 60))}
        </span>
        <span>:</span>
        <span className="digits">
          {formatString("0" + Math.floor((time / 1000) % 60))}
        </span>
        <span>.</span>
        <span className="digits mili-sec">
          {formatString("0" + ((time / 10) % 100))}
        </span>
      </div>

      <div className={`wrapper-btn${isActive ? " wrapper-two-buttons" : ""}`}>
        {isActive ? (
          <>
            <button
              className={`btn${isActive ? " reveal" : ""}`}
              onClick={handlePauseResume}
            >
              {isPaused ? "Resume" : "Pause"}
            </button>

            <button
              className={`btn${isActive ? " reveal" : ""}`}
              onClick={handleReset}
            >
              Reset
            </button>
          </>
        ) : (
          <button
            className={`btn btn-start${isActive ? " reveal" : ""}`}
            onClick={handleStart}
          >
            Start
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
