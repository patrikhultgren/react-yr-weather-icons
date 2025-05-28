
import { render, screen } from "@testing-library/react";
import LightSleetShowersAndThunderPolarTwilight from "../lightssleetshowersandthunder_polartwilight";

describe("LightSleetShowersAndThunderPolarTwilight", () => {
  it("renders without crashing", () => {
    render(<LightSleetShowersAndThunderPolarTwilight />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<LightSleetShowersAndThunderPolarTwilight title="LightSleetShowersAndThunderPolarTwilight title" titleId="lightsleetshowersandthunderpolartwilight-title" />);
    const title = screen.getByTitle("LightSleetShowersAndThunderPolarTwilight title");
    expect(title).toBeInTheDocument();
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("aria-labelledby", "lightsleetshowersandthunderpolartwilight-title");
  });

  it("does not render title element if title prop is not provided", () => {
    render(<LightSleetShowersAndThunderPolarTwilight titleId="lightssleetshowersandthunder_polartwilight-title" />);
    const title = screen.queryByTitle(/./);
    expect(title).toBeNull();
  });

  it("accepts and applies width and height props", () => {
    render(<LightSleetShowersAndThunderPolarTwilight width="100px" height="150px" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveAttribute("width", "100px");
    expect(svg).toHaveAttribute("height", "150px");
  });

  it("accepts and applies className prop", () => {
    render(<LightSleetShowersAndThunderPolarTwilight className="my-custom-class" />);
    const svg = screen.getByRole("img", { hidden: true });
    expect(svg).toHaveClass("my-custom-class");
  });

  it("accepts and forwards other SVG props", () => {
    render(
      <LightSleetShowersAndThunderPolarTwilight
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
