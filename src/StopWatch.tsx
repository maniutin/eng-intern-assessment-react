import React from "react";

interface IProps {
  hours: number;
  minutes: string;
  seconds: string;
  milliseconds: string;
}

export default function StopWatch({
  hours,
  minutes,
  seconds,
  milliseconds,
}: IProps) {
  return (
    <div>
      <div>
        {hours}:{minutes}:{seconds}:{milliseconds}
      </div>
    </div>
  );
}
