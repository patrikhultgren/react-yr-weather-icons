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

  it("contains gradient and filter definitions", () => {
    const { container } = render(<Cloudy />);
    expect(container.querySelector("linearGradient")).toBeInTheDocument();
    expect(container.querySelector("filter")).toBeInTheDocument();
    expect(container.querySelector("clipPath")).toBeInTheDocument();
  });

  it("contains multiple <path> elements", () => {
    const { container } = render(<Cloudy />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBeGreaterThanOrEqual(3);
  });

  it("applies blend modes and opacity correctly", () => {
    const { container } = render(<Cloudy />);
    const blendedGroup = container.querySelector("g[filter]");
    expect(blendedGroup).toHaveStyle("mix-blend-mode: multiply");
    expect(blendedGroup).toHaveAttribute("opacity", "0.3");
  });
});
