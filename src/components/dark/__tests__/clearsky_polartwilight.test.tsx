import { render, screen } from "@testing-library/react";
import ClearSkyPolarTwilight from "../clearsky_polartwilight";
import { describe, it, expect } from "vitest";

describe("ClearSkyPolarTwilight", () => {
  it("renders without crashing", () => {
    render(<ClearSkyPolarTwilight data-testid="polar-icon" />);
    expect(screen.getByTestId("polar-icon")).toBeInTheDocument();
  });

  it("renders a <title> element when title is provided", () => {
    render(
      <ClearSkyPolarTwilight title="Polar Twilight" titleId="polar-title" />
    );
    const title = screen.getByTitle("Polar Twilight");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "polar-title");
  });

  it("does not render <title> when title is not provided", () => {
    render(<ClearSkyPolarTwilight titleId="polar-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "polar-title");
  });

  it("contains radial and linear gradients", () => {
    const { container } = render(<ClearSkyPolarTwilight />);
    const radialGradient = container.querySelector("radialGradient");
    const linearGradient = container.querySelector("linearGradient");

    expect(radialGradient).toBeInTheDocument();
    expect(linearGradient).toBeInTheDocument();
    expect(radialGradient?.getAttribute("id")).toBeTruthy();
    expect(linearGradient?.getAttribute("id")).toBeTruthy();
  });

  it("contains expected path elements", () => {
    const { container } = render(<ClearSkyPolarTwilight />);
    const paths = container.querySelectorAll("path");
    expect(paths.length).toBeGreaterThanOrEqual(4); // Includes gradient and content paths
  });

  it("uses correct clipPath in the <g> tag", () => {
    const { container } = render(<ClearSkyPolarTwilight />);
    const group = container.querySelector("g");
    expect(group?.getAttribute("clip-path")).toMatch(/^url\(#.+\)$/);
  });
});
