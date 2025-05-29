import { render, screen, waitFor } from "@testing-library/react";
import YrWeatherIcon from "./YrWeatherIcon";
import { vi } from "vitest";

// Mock only the known icon
vi.mock("./light/clearsky_day.tsx", () => {
  return {
    default: () => <svg data-testid="ClearSkyDay" />,
  };
});

// Stub the import.meta.glob to only resolve certain icons
vi.stubGlobal("import.meta", {
  glob: (pattern: string) => {
    if (pattern === "./light/*.tsx") {
      return {
        "./light/clearsky_day.tsx": () => import("./light/clearsky_day"),
      };
    }
    if (pattern === "./dark/*.tsx") {
      return {};
    }
    return {};
  },
});

describe("YrWeatherIcon", () => {
  it("renders light mode ClearSkyDay icon", async () => {
    render(<YrWeatherIcon symbolCode="clearsky_day" />);

    await waitFor(() => {
      expect(screen.getByTestId("ClearSkyDay")).toBeInTheDocument();
    });
  });

  it("renders fallback for missing icon", async () => {
    render(
      // @ts-ignore - simulate missing icon
      <YrWeatherIcon symbolCode="unknown_icon" width="3rem" height="3rem" />
    );

    await waitFor(() => {
      // Icon does not exist
      expect(screen.queryByTestId("ClearSkyDay")).not.toBeInTheDocument();
      // Fallback div exists with expected style
      const fallback = screen.getByRole("presentation", { hidden: true });
      expect(fallback).toHaveStyle({ width: "3rem", height: "3rem" });
    });
  });

  it("renders fallback for missing dark mode icon", async () => {
    render(
      <YrWeatherIcon
        symbolCode="clearsky_day"
        mode="dark"
        width="4rem"
        height="4rem"
      />
    );

    await waitFor(() => {
      expect(screen.queryByTestId("ClearSkyDay")).not.toBeInTheDocument();
      const fallback = screen.getByRole("presentation", { hidden: true });
      expect(fallback).toHaveStyle({ width: "4rem", height: "4rem" });
    });
  });
});
