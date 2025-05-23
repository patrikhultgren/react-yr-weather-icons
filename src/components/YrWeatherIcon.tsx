import { Suspense, lazy, SVGProps } from "react";

export type SymbolCode =
  | "clearsky_day"
  | "clearsky_night"
  | "clearsky_polartwilight"
  | "cloudy"
  | "fair_day"
  | "fair_night"
  | "fair_polartwilight"
  | "fog"
  | "heavyrain"
  | "heavyrainandthunder"
  | "heavyrainshowers_day"
  | "heavyrainshowers_night"
  | "heavyrainshowers_polartwilight"
  | "heavyrainshowersandthunder_day"
  | "heavyrainshowersandthunder_night"
  | "heavyrainshowersandthunder_polartwilight"
  | "heavysleet"
  | "heavysleetandthunder"
  | "heavysleetshowers_day"
  | "heavysleetshowers_night"
  | "heavysleetshowers_polartwilight"
  | "heavysleetshowersandthunder_day"
  | "heavysleetshowersandthunder_night"
  | "heavysleetshowersandthunder_polartwilight"
  | "heavysnow"
  | "heavysnowandthunder"
  | "heavysnowshowers_day"
  | "heavysnowshowers_night"
  | "heavysnowshowers_polartwilight"
  | "heavysnowshowersandthunder_day"
  | "heavysnowshowersandthunder_night"
  | "heavysnowshowersandthunder_polartwilight"
  | "lightrain"
  | "lightrainandthunder"
  | "lightrainshowers_day"
  | "lightrainshowers_night"
  | "lightrainshowers_polartwilight"
  | "lightrainshowersandthunder_day"
  | "lightrainshowersandthunder_night"
  | "lightrainshowersandthunder_polartwilight"
  | "lightsleet"
  | "lightsleetandthunder"
  | "lightsleetshowers_day"
  | "lightsleetshowers_night"
  | "lightsleetshowers_polartwilight"
  | "lightsnow"
  | "lightsnowandthunder"
  | "lightsnowshowers_day"
  | "lightsnowshowers_night"
  | "lightsnowshowers_polartwilight"
  | "lightssleetshowersandthunder_day"
  | "lightssleetshowersandthunder_night"
  | "lightssleetshowersandthunder_polartwilight"
  | "lightssnowshowersandthunder_day"
  | "lightssnowshowersandthunder_night"
  | "lightssnowshowersandthunder_polartwilight"
  | "partlycloudy_day"
  | "partlycloudy_night"
  | "partlycloudy_polartwilight"
  | "rain"
  | "rainandthunder"
  | "rainshowers_day"
  | "rainshowers_night"
  | "rainshowers_polartwilight"
  | "rainshowersandthunder_day"
  | "rainshowersandthunder_night"
  | "rainshowersandthunder_polartwilight"
  | "sleet"
  | "sleetandthunder"
  | "sleetshowers_day"
  | "sleetshowers_night"
  | "sleetshowers_polartwilight"
  | "sleetshowersandthunder_day"
  | "sleetshowersandthunder_night"
  | "sleetshowersandthunder_polartwilight"
  | "snow"
  | "snowandthunder"
  | "snowshowers_day"
  | "snowshowers_night"
  | "snowshowers_polartwilight"
  | "snowshowersandthunder_day"
  | "snowshowersandthunder_night"
  | "snowshowersandthunder_polartwilight";

interface SVGRProps {
  title?: string;
  titleId?: string;
}

export type Props = {
  mode?: "dark" | "light";
  symbolCode: SymbolCode;
} & SVGProps<SVGSVGElement> &
  SVGRProps;

// Preload all SVG icon components using import.meta.glob
const icons = {
  light: import.meta.glob("./light/*.tsx"),
  dark: import.meta.glob("./dark/*.tsx"),
};

// Cache loaded components
const iconCache = new Map<string, React.LazyExoticComponent<any>>();

const getLazyIcon = (mode: "dark" | "light", symbolCode: SymbolCode) => {
  const key = `${mode}/${symbolCode}`;
  if (!iconCache.has(key)) {
    const importFn = icons[mode][`./${mode}/${symbolCode}.tsx`];
    if (importFn) {
      const LazyIcon = lazy(
        importFn as () => Promise<{ default: React.ComponentType<any> }>
      );
      iconCache.set(key, LazyIcon);
    } else {
      // fallback component if icon doesn't exist
      iconCache.set(
        key,
        lazy(() => Promise.resolve({ default: () => null }))
      );
    }
  }
  return iconCache.get(key)!;
};

const YrWeatherIcon = ({ mode = "light", symbolCode, ...rest }: Props) => {
  const IconComponent = getLazyIcon(mode, symbolCode);

  return (
    <Suspense fallback={null}>
      <IconComponent {...rest} />
    </Suspense>
  );
};

export default YrWeatherIcon;
