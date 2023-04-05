import { render, screen } from "@testing-library/react";
import App from "./App";
import Login from "./components/Login";
test("renders learn react link", () => {
  render(<Login />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});
