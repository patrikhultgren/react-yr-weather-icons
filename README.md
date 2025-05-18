# [React Yr Weather Icons](https://github.com/patrikhultgren/react-yr-weather-icons)

Easily use Yr weather icons in your React application. All light and dark variants are available as TypeScript-ready React components.

## Installation

```bash
npm i react-yr-weather-icons
```

### Example usage

```jsx
import { YrWeatherIcon } from "react-yr-weather-icons";

function YourApp() {
  return <YrWeatherIcon symbolCode="clearsky_day" />;
}
```

Main properties

| Key          | Default  | Notes                                                                    |
| ------------ | -------- | ------------------------------------------------------------------------ |
| `symbolCode` |          | Use any symbol code from Yr, example: `clearsky_day` or `clearsky_night` |
| `mode`       | `light`  | The mode of the icons, example: `light` or `dark`                        |
| `width`      | `2.5rem` |                                                                          |
| `height`     | `2.5rem` |                                                                          |
| `className`  |          |                                                                          |
| `title`      |          |                                                                          |
| `titleId`    |          |                                                                          |

All standard SVG properties are also supported.

#### Symbol codes

```
clearsky_day
clearsky_night
clearsky_polartwilight
cloudy
fair_day
fair_night
fair_polartwilight
fog
heavyrain
heavyrainandthunder
heavyrainshowers_day
heavyrainshowers_night
heavyrainshowers_polartwilight
heavyrainshowersandthunder_day
heavyrainshowersandthunder_night
heavyrainshowersandthunder_polartwilight
heavysleet
heavysleetandthunder
heavysleetshowers_day
heavysleetshowers_night
heavysleetshowers_polartwilight
heavysleetshowersandthunder_day
heavysleetshowersandthunder_night
heavysleetshowersandthunder_polartwilight
heavysnow
heavysnowandthunder
heavysnowshowers_day
heavysnowshowers_night
heavysnowshowers_polartwilight
heavysnowshowersandthunder_day
heavysnowshowersandthunder_night
heavysnowshowersandthunder_polartwilight
lightrain
lightrainandthunder
lightrainshowers_day
lightrainshowers_night
lightrainshowers_polartwilight
lightrainshowersandthunder_day
lightrainshowersandthunder_night
lightrainshowersandthunder_polartwilight
lightsleet
lightsleetandthunder
lightsleetshowers_day
lightsleetshowers_night
lightsleetshowers_polartwilight
lightsnow
lightsnowandthunder
lightsnowshowers_day
lightsnowshowers_night
lightsnowshowers_polartwilight
lightssleetshowersandthunder_day
lightssleetshowersandthunder_night
lightssleetshowersandthunder_polartwilight
lightssnowshowersandthunder_day
lightssnowshowersandthunder_night
lightssnowshowersandthunder_polartwilight
partlycloudy_day
partlycloudy_night
partlycloudy_polartwilight
rain
rainandthunder
rainshowers_day
rainshowers_night
rainshowers_polartwilight
rainshowersandthunder_day
rainshowersandthunder_night
rainshowersandthunder_polartwilight
sleet
sleetandthunder
sleetshowers_day
sleetshowers_night
sleetshowers_polartwilight
sleetshowersandthunder_day
sleetshowersandthunder_night
sleetshowersandthunder_polartwilight
snow
snowandthunder
snowshowers_day
snowshowers_night
snowshowers_polartwilight
snowshowersandthunder_day
snowshowersandthunder_night
snowshowersandthunder_polartwilight
```

[Yr Weather Symbols](https://nrkno.github.io/yr-weather-symbols/)

## Licence

MIT

- All SVGs are provided by Yr and are licensed by the "Yr weather symbols © 2015 by Yr/NRK is licensed under Attribution 4.0 International"
