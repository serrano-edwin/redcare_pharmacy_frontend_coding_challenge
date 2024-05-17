import { render, screen } from "@testing-library/react";
import Stars from ".";

test("renders Stars", () => {
  render(<Stars />);

  expect(screen.getByText(/Stars/i)).toBeInTheDocument();
});
