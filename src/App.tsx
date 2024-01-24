import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch";
import StopWatchButton from "./StopWatchButton";

export enum ButtonType {
  Start = "Start",
  Stop = "Stop",
  Reset = "Reset",
  Lap = "Lap",
}

export default function App() {
  // store time
  const [time, setTime] = useState<number>(0);

  // check if the timer is running
  const [isRunning, setIsRunning] = useState<boolean>(false);

  // array to store laps
  const lapsArr: number[] = [];

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

  const lap = () => {
    lapsArr.push(time);
  };

  return (
    <main>
      <StopWatch
        hours={hours}
        minutes={minutes.toString().padStart(2, "0")}
        seconds={seconds.toString().padStart(2, "0")}
        milliseconds={milliseconds.toString().padStart(2, "0")}
      />
      <div>
        <StopWatchButton
          type={isRunning ? ButtonType.Stop : ButtonType.Start}
          handleClick={startStop}
        />
        <StopWatchButton
          type={isRunning ? ButtonType.Lap : ButtonType.Reset}
          handleClick={isRunning ? lap : reset}
        />
      </div>
    </main>
  );
}
