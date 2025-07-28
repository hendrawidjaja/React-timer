import "./style.css";
import ButtonController from "@components/ButtonController.tsx";
import Display from "@components/Display.tsx";
import { useEffect, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval;

    if (isActive && !isPaused) {
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

  return (
    <div className="container">
      <Display time={time} />

      <div className={`wrapper-btn${isActive ? " wrapper-two-buttons" : ""}`}>
        {isActive ? (
          <ButtonController
            handlePauseResume={handlePauseResume}
            handleReset={handleReset}
            isActive={isActive}
            isPaused={isPaused}
          />
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