import React, { FC, useRef, useState } from "react";

const Stopwatch: FC = () => {
  const [timeElapsed, setTimeElapsed] = useState(0);
  const intervalID = useRef<number>();

  const handleStart = () => {
    const now = Date.now();
    handleStop();
    setTimeElapsed(0);
    intervalID.current = setInterval(() => {
      setTimeElapsed((Date.now() - now) / 1000);
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalID.current);
  };
  return (
    <>
      <div className="stopwatch-box">
        <p>{timeElapsed.toFixed(3)} s</p>
        <div style={{ display: "flex", flexDirection: "row", gap: "0.5rem" }}>
          <button onClick={handleStart}>Start</button>
          <button onClick={handleStop}>Stop</button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
