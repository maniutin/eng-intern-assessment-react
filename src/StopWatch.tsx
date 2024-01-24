import React from "react";
import StopWatchButton from "./StopWatchButton";

interface IProps {
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  isRunning: boolean;
  startStop: React.MouseEventHandler<HTMLButtonElement>;
  reset: React.MouseEventHandler<HTMLButtonElement>;
}

export enum ButtonType {
  Start = "Start",
  Stop = "Stop",
  Reset = "Reset",
}

export default function StopWatch({
  hours,
  minutes,
  seconds,
  milliseconds,
  isRunning,
  startStop,
  reset,
}: IProps) {
  return (
    <div>
      <div>
        {hours}:{minutes.toString().padStart(2, "0")}:
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </div>
      <div>
        <StopWatchButton
          type={isRunning ? ButtonType.Stop : ButtonType.Start}
          handleClick={startStop}
        />
        <StopWatchButton type={ButtonType.Reset} handleClick={reset} />
      </div>
    </div>
  );
}
