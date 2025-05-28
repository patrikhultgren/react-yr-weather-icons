import { render, screen } from "@testing-library/react";
import FairNight from "../fair_night";

describe("FairNight SVG component", () => {
  it("renders without crashing", () => {
    render(<FairNight />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
  });

  it("renders the title element when title prop is provided", () => {
    const titleText = "Night icon";
    render(<FairNight title={titleText} titleId="night-title" />);
    const title = screen.getByText(titleText);
    expect(title).toBeInTheDocument();
    expect(title).toHaveAttribute("id", "night-title");
  });

  it("does not render a title element when title prop is not provided", () => {
    render(<FairNight />);
    const svg = screen.getByRole("img");
    const titleElements = svg.querySelectorAll("title");
    expect(titleElements.length).toBe(0);
  });

  it("passes extra props to the SVG element", () => {
    render(
      <FairNight data-testid="fair-night-svg" aria-label="Custom label" />
    );
    const svg = screen.getByTestId("fair-night-svg");
    expect(svg).toHaveAttribute("aria-label", "Custom label");
  });
});
