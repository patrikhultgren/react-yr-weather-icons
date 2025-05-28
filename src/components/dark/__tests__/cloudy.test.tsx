import { render, screen } from "@testing-library/react";
import Cloudy from "../cloudy";
import { describe, it, expect } from "vitest";

describe("Cloudy", () => {
  it("renders without crashing", () => {
    render(<Cloudy data-testid="cloudy-icon" />);
    expect(screen.getByTestId("cloudy-icon")).toBeInTheDocument();
  });

  it("has role img and proper aria-labelledby when titleId is provided", () => {
    render(<Cloudy title="Cloudy Icon" titleId="cloudy-title" />);
    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "cloudy-title");
    expect(screen.getByTitle("Cloudy Icon")).toBeInTheDocument();
  });

  it("does not render <title> if title is not provided", () => {
    render(<Cloudy titleId="cloudy-title" />);
    const title = screen.queryByTitle(/./); // matches any non-empty string
    expect(title).toBeNull();
  });
});
