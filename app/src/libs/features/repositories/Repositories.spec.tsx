import { render, screen } from "@testing-library/react";
import Repositories from ".";

test("renders Repositories", () => {
  render(<Repositories />);

  expect(screen.getByText(/Repositories/i)).toBeInTheDocument();
});
