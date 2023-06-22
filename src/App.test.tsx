import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Warning alert tests", () => {
  it("should render warning message", () => {
    render(<App />);
    const warningAlert = screen.getByText(/Attention/i);
    expect(warningAlert).toBeVisible();
  });

  it("should close warning message", () => {
    render(<App />);
    const warningAlert = screen.getByText(/Attention/i);
    const closeButton = screen.getAllByRole("button");
    fireEvent.click(closeButton[1])
    expect(warningAlert).not.toBeVisible();
  });
});
