
import { render, screen } from "@testing-library/react";
import LightSleetShowersAndThunderDay from "../lightssleetshowersandthunder_day";

describe("LightSleetShowersAndThunderDay", () => {
  it("renders without crashing", () => {
    render(<LightSleetShowersAndThunderDay />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<LightSleetShowersAndThunderDay title="LightSleetShowersAndThunderDay title" titleId="lightsleetshowersandthunderday-title" />);
    const title = screen.getByTitle("LightSleetShowersAndThunderDay title");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "lightsleetshowersandthunderday-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<LightSleetShowersAndThunderDay titleId="lightssleetshowersandthunder_day-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("accepts and applies width and height props", () => {
    render(<LightSleetShowersAndThunderDay width="100px" height="150px" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("width", "100px");
    expect(svg).toHaveAttribute("height", "150px");
  });

  it("accepts and applies className prop", () => {
    render(<LightSleetShowersAndThunderDay className="my-custom-class" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveClass("my-custom-class");
  });

  it("accepts and forwards other SVG props", () => {
    render(
      <LightSleetShowersAndThunderDay
        data-testid="svg-element"
        aria-label="Heavy rain icon"
        style={{ border: "1px solid red" }}
        tabIndex={0}
      />
    );
    const svg = screen.getByTestId("svg-element");
    expect(svg).toHaveAttribute("aria-label", "Heavy rain icon");
    expect(svg).toHaveStyle("border: 1px solid red");
    expect(svg).toHaveAttribute("tabindex", "0");
  });
});
