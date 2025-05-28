import { render, screen } from "@testing-library/react";
import ClearSkyDay from "../clearsky_day";

describe("ClearSkyDay", () => {
  it("renders without crashing", () => {
    render(<ClearSkyDay />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<ClearSkyDay title="Clear Sky" titleId="clear-sky-title" />);
    const title = screen.getByTitle("Clear Sky");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "clear-sky-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<ClearSkyDay titleId="clear-sky-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("renders expected SVG structure", () => {
    const { container } = render(<ClearSkyDay />);
    const gradients = container.querySelectorAll(
      "radialGradient, linearGradient"
    );
    const clipPaths = container.querySelectorAll("clipPath");
    const paths = container.querySelectorAll("path");
    expect(gradients.length).toBe(2);
    expect(clipPaths.length).toBe(1);
    expect(paths.length).toBeGreaterThan(0);
  });
});
