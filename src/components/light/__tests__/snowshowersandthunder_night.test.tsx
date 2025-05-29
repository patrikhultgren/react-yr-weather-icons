
import { render, screen } from "@testing-library/react";
import SnowShowersAndThunderNight from "../snowshowersandthunder_night";

describe("SnowShowersAndThunderNight", () => {
  it("renders without crashing", () => {
    render(<SnowShowersAndThunderNight />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<SnowShowersAndThunderNight title="SnowShowersAndThunderNight title" titleId="snowshowersandthundernight-title" />);
    const title = screen.getByTitle("SnowShowersAndThunderNight title");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "snowshowersandthundernight-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<SnowShowersAndThunderNight titleId="snowshowersandthunder_night-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("accepts and applies width and height props", () => {
    render(<SnowShowersAndThunderNight width="100px" height="150px" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("width", "100px");
    expect(svg).toHaveAttribute("height", "150px");
  });

  it("accepts and applies className prop", () => {
    render(<SnowShowersAndThunderNight className="my-custom-class" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveClass("my-custom-class");
  });

  it("accepts and forwards other SVG props", () => {
    render(
      <SnowShowersAndThunderNight
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
