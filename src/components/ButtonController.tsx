type ButtonControllerType = {
  handlePauseResume: () => void,
  handleReset: () => void
  isActive: boolean,
  isPaused: boolean,
}

const ButtonController = ({isActive, handlePauseResume, isPaused, handleReset}: ButtonControllerType) => {
  return <>
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
}

export default ButtonController;