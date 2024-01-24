import React from "react";

interface IProps {
  type: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function StopWatchButton({ type, handleClick }: IProps) {
  return <button onClick={handleClick}>{type}</button>;
}
