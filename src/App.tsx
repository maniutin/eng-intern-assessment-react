import React, { useEffect, useState } from "react";
import StopWatch from "./StopWatch";
import StopWatchButton from "./StopWatchButton";

enum ButtonType {
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

  // store laps
  const [laps, setLaps] = useState<string[]>([]);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;
    if (isRunning) {
      // setting time
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  // calculate time values
  const formatTime = (time: number): string => {
    const hours = Math.floor(time / 360000);
    const minutes = Math.floor((time % 360000) / 6000)
      .toString()
      .padStart(2, "0");
    const seconds = Math.floor((time % 6000) / 100)
      .toString()
      .padStart(2, "0");
    const milliseconds = (time % 100).toString().padStart(2, "0");

    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  };

  // start/stop the timer
  const startStop = () => {
    setIsRunning(!isRunning);
  };

  // reset timer to 0
  const reset = () => {
    setTime(0);
    setLaps([]);
  };

  // store lap
  const lap = () => {
    setLaps([...laps, formatTime(time)]);
  };

  return (
    <main>
      <StopWatch timeString={formatTime(time)} />
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
      <div>
        {laps.map((lap: string, index: number) => (
          <div key={index}>{`Lap ${index + 1} : ${lap}`}</div>
        ))}
      </div>
    </main>
  );
}
