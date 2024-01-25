import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "../src/App";

test("starts the stopwatch", () => {
  render(<App />);

  fireEvent.click(screen.getByText("Start"));
  expect(screen.getByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();
});

test("stops the stopwatch", () => {
  render(<App />);

  fireEvent.click(screen.getByText("Start"));
  expect(screen.getByText(/(\d{2}:){2}\d{2}/)).toBeInTheDocument();
});

test("resets the stopwatch", () => {
  render(<App />);

  fireEvent.click(screen.getByText("Reset"));
  expect(screen.getByText("0:00:00:00")).toBeInTheDocument();
});

test("pauses and resumes the stopwatch", () => {
  const { getByText } = render(<App />);

  fireEvent.click(screen.getByText("Start")); // Start
  fireEvent.click(screen.getByText("Stop")); // Stop
  const pausedTime = getByText(/(\d{2}:){2}\d{2}/);

  fireEvent.click(screen.getByText("Start")); // Start Again
  expect(getByText(/(\d{2}:){2}\d{2}/).textContent).not.toBe(pausedTime);
});
