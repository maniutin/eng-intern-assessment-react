import React from "react";

interface IProps {
  timeString: string;
}

export default function StopWatch({ timeString }: IProps) {
  return (
    <div>
      <div>{timeString}</div>
    </div>
  );
}
