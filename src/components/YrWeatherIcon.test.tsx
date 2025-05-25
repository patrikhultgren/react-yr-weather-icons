import { render, screen, waitFor } from "@testing-library/react";
import YrWeatherIcon from "./YrWeatherIcon";
import { vi } from "vitest";

vi.mock("./light/clearsky_day.tsx", () => {
  return {
    default: () => <svg data-testid="ClearSkyDay" />,
  };
});

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
    // @ts-ignore
    render(<YrWeatherIcon symbolCode="unknown_icon" />);

    await waitFor(() => {
      expect(screen.queryByTestId("ClearSkyDay")).not.toBeInTheDocument();
    });
  });

  it("renders nothing when dark icon is missing", async () => {
    render(<YrWeatherIcon symbolCode="clearsky_day" mode="dark" />);

    await waitFor(() => {
      expect(screen.queryByTestId("ClearSkyDay")).not.toBeInTheDocument();
    });
  });
});
