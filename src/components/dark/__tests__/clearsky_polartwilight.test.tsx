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
});
