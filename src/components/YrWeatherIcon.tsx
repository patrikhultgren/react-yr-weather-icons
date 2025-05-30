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

type SvgIconProps = SVGProps<SVGSVGElement> & SVGRProps;

export type YrWeatherIconProps = {
  mode?: "dark" | "light";
  symbolCode: SymbolCode;
} & SvgIconProps;

const Fallback = ({
  width,
  height,
}: {
  width: string | number;
  height: string | number;
}) => <div style={{ width, height }} role="presentation" />;

const icons = {
  light: import.meta.glob("./light/*.tsx"),
  dark: import.meta.glob("./dark/*.tsx"),
};

const iconCache = new Map<
  string,
  React.LazyExoticComponent<React.ComponentType<SvgIconProps>>
>();

const getLazyIcon = ({
  mode,
  symbolCode,
  width,
  height,
}: {
  mode: "dark" | "light";
  symbolCode: SymbolCode;
  width: string | number;
  height: string | number;
}): React.LazyExoticComponent<React.ComponentType<SvgIconProps>> => {
  const key = `${mode}/${symbolCode}`;
  if (!iconCache.has(key)) {
    const importFn = icons[mode][`./${mode}/${symbolCode}.tsx`];
    if (importFn) {
      const LazyIcon = lazy(
        importFn as () => Promise<{
          default: React.ComponentType<SvgIconProps>;
        }>
      );
      iconCache.set(key, LazyIcon);
    } else {
      const FallbackComponent: React.ComponentType<SvgIconProps> = () => (
        <Fallback width={width} height={height} />
      );
      iconCache.set(
        key,
        lazy(() => Promise.resolve({ default: FallbackComponent }))
      );
    }
  }
  return iconCache.get(key)! as React.LazyExoticComponent<
    React.ComponentType<SvgIconProps>
  >;
};

const YrWeatherIcon = ({
  mode = "light",
  width = 40,
  height = 40,
  symbolCode,
  ...rest
}: YrWeatherIconProps) => {
  const IconComponent = getLazyIcon({
    mode,
    symbolCode,
    width,
    height,
  });

  return (
    <Suspense fallback={<Fallback width={width} height={height} />}>
      <IconComponent {...rest} width={width} height={height} />
    </Suspense>
  );
};

export default YrWeatherIcon;
