const formatTime = (value) => {
  let centiseconds = Math.ceil(value / 10);
  let seconds = Math.floor(centiseconds / 100)
    .toString()
    .slice(-2);
  let minutes = seconds / 60;

  return `${minutes}:${seconds}:${centiseconds}`;
};

export default formatTime;
