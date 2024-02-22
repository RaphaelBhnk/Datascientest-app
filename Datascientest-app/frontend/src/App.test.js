import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders text", () => {
  render(<App />);
  const textElement = screen.getByText(/Inscription/i);
  expect(textElement).toBeInTheDocument();
});

test("renders input", () => {
  render(<App />);
  const input = screen.getByLabelText(/mail/i);
  expect(input).toBeInTheDocument();
});
