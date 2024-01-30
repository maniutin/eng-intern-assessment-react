import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

describe("test", () => {
  beforeEach(() => {
    jest.useFakeTimers();
    render(<App />);
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it("starts the stopwatch", () => {
    fireEvent.click(screen.getByText("Start"));
    expect(screen.getByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();
  });

  it("resets the stopwatch", () => {
    fireEvent.click(screen.getByText("Reset"));
    expect(screen.getByText("0:00:00:00")).toBeInTheDocument();
  });

  it("stops and resumes the stopwatch", () => {
    fireEvent.click(screen.getByText("Start")); // Start
    fireEvent.click(screen.getByText("Stop")); // Stop
    const stoppedTime = screen.getByText(/(\d{2}:){2}\d{2}/);

    fireEvent.click(screen.getByText("Start")); // Start Again
    expect(screen.getByText(/(\d{2}:){2}\d{2}/).textContent).not.toBe(
      stoppedTime
    );
  });

  it("records lap times", () => {
    fireEvent.click(screen.getByText("Start")); // Start

    act(() => {
      jest.advanceTimersByTime(2000);
    });

    fireEvent.click(screen.getByText("Lap")); // Lap

    expect(document.body.querySelector(".lap-record").textContent).toBe(
      "Lap 1: 0:00:02:00"
    );
  });
});
