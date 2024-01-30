import "./StopWatch.css";
import React from "react";

interface IProps {
  timeString: string;
}

export default function StopWatch({ timeString }: IProps) {
  return <div className="stopwatch-display">{timeString}</div>;
}
