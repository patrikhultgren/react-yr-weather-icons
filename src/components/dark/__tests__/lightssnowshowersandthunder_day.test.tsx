
import { render, screen } from "@testing-library/react";
import LightSnowShowersAndThunderDay from "../lightssnowshowersandthunder_day";

describe("LightSnowShowersAndThunderDay", () => {
  it("renders without crashing", () => {
    render(<LightSnowShowersAndThunderDay />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<LightSnowShowersAndThunderDay title="LightSnowShowersAndThunderDay title" titleId="lightsnowshowersandthunderday-title" />);
    const title = screen.getByTitle("LightSnowShowersAndThunderDay title");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "lightsnowshowersandthunderday-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<LightSnowShowersAndThunderDay titleId="lightssnowshowersandthunder_day-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("accepts and applies width and height props", () => {
    render(<LightSnowShowersAndThunderDay width="100px" height="150px" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("width", "100px");
    expect(svg).toHaveAttribute("height", "150px");
  });

  it("accepts and applies className prop", () => {
    render(<LightSnowShowersAndThunderDay className="my-custom-class" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveClass("my-custom-class");
  });

  it("accepts and forwards other SVG props", () => {
    render(
      <LightSnowShowersAndThunderDay
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
