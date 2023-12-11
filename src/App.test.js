import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import this for better matchers
import App from "./App"; // Import your component

test("renders with a specific class name", () => {
  // Render the component
  const { container } = render(<App />);

  // Check if the element with the specified class exists
  const elementWithClassName = container.querySelector(".columns"); // Replace 'your-class-name' with the actual class name
  expect(elementWithClassName).toBeInTheDocument();
});

test("renders with a specific class name", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector(".board-col");
  expect(elementWithClassName).toBeInTheDocument();
})

test("renders with a specific class name", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector(".keyboard-wrapper");
  expect(elementWithClassName).toBeInTheDocument();
})

test("renders with a specific id name", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector("#main");
  expect(elementWithClassName).toBeInTheDocument();
})

test("renders with a specific id name", () => {
  const { container } = render(<App />);

  const elementWithClassName = container.querySelector("#game");
  expect(elementWithClassName).toBeInTheDocument();
})
