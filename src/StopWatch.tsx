import React from "react";

import "./StopWatch.css";

interface IProps {
  timeString: string;
}

export default function StopWatch({ timeString }: IProps) {
  return <div className="stopwatch-display">{timeString}</div>;
}
