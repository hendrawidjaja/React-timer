type DisplayType = {
  time: number
}

const formatString = (value: string) => {
  return value.slice(-2);
};

const Display = ({time}: DisplayType) => {
  return (
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
  )
}

export default Display;