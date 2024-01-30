import "./StopWatchButton.css";
import React from "react";

interface IProps {
  type: string;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function StopWatchButton({ type, handleClick }: IProps) {
  return (
    <button className="control-button" onClick={handleClick}>
      {type}
    </button>
  );
}
