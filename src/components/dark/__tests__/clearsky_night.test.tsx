import { render, screen } from "@testing-library/react";
import ClearSkyNight from "../clearsky_night";
import { describe, it, expect } from "vitest";

describe("ClearSkyNight", () => {
  it("renders without crashing", () => {
    render(<ClearSkyNight data-testid="night-icon" />);
    expect(screen.getByTestId("night-icon")).toBeInTheDocument();
  });

  it("renders a <title> element when title is provided", () => {
    render(<ClearSkyNight title="Clear Night" titleId="clear-night-title" />);
    const title = screen.getByTitle("Clear Night");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "clear-night-title");
  });

  it("does not render <title> when title is not provided", () => {
    render(<ClearSkyNight titleId="clear-night-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "clear-night-title");
  });

  it("contains a linearGradient definition", () => {
    const { container } = render(<ClearSkyNight />);
    const gradients = container.querySelectorAll("linearGradient");
    expect(gradients.length).toBe(1);
    expect(gradients[0]).toHaveAttribute("id");
  });

  it("contains a path with a gradient fill", () => {
    const { container } = render(<ClearSkyNight />);
    const path = container.querySelector("path");
    expect(path).toBeInTheDocument();
    const fill = path?.getAttribute("fill");
    expect(fill).toMatch(/^url\(#.+\)$/);
  });
});
