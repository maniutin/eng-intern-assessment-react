import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch";

export default function App() {
  // store time
  const [time, setTime] = useState<number>(0);

  // check if the timer is running
  const [isRunning, setIsRunning] = useState<boolean>(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      // setting time
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // calculate time values
  const hours = Math.floor(time / 360000);
  const minutes = Math.floor((time % 360000) / 6000);
  const seconds = Math.floor((time % 6000) / 100);
  const milliseconds = time % 100;

  // start/stop the timer
  const startStop = () => {
    setIsRunning(!isRunning);
  };

  // reset timer to 0
  const reset = () => {
    setTime(0);
  };

  return (
    <main>
      <StopWatch
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        milliseconds={milliseconds}
        isRunning={isRunning}
        startStop={startStop}
        reset={reset}
      />
    </main>
  );
}
