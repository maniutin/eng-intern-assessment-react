import React from "react";
import { act, fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import StopWatch from "../src/StopWatch";

test("loads and displays default values", async () => {
  render(<StopWatch timeString="0:00:00:00" />);

  expect(screen.getByText("0:00:00:00"));
});
