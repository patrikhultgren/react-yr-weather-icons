import { render, screen } from "@testing-library/react";
import FairDay from "../fair_day";

describe("FairDay SVG component", () => {
  it("renders an SVG element", () => {
    render(<FairDay />);
    const svg = screen.getByRole("img");
    expect(svg).toBeInTheDocument();
    expect(svg.tagName).toBe("svg");
  });

  it("renders the title element when title prop is provided", () => {
    render(<FairDay title="Sunny Day" titleId="title-id" />);
    const title = screen.getByText("Sunny Day");
    expect(title).toBeInTheDocument();
    expect(title.tagName).toBe("title");

    const svg = screen.getByRole("img");
    expect(svg).toHaveAttribute("aria-labelledby", "title-id");
  });

  it("does not render the title element when title prop is not provided", () => {
    render(<FairDay />);
    const title = screen.queryByText(/./);
    expect(title).not.toBeInTheDocument();
  });

  it("forwards additional props to the svg element", () => {
    render(<FairDay data-testid="fairday-svg" />);
    const svg = screen.getByTestId("fairday-svg");
    expect(svg).toBeInTheDocument();
  });
});
