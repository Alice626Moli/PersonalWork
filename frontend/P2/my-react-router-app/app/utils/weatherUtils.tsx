import { WeatherType } from "~/@enum/weatherType";
import {
  WiDaySunny,
  WiCloud,
  WiRaindrop,
  WiStrongWind,
  WiThermometer,
  WiDust,
} from "react-icons/wi";

export const getWeatherIcon = (size = 24, color = "#fff") => {
  return {
    [WeatherType.SUNNY]: (
      <WiDaySunny size={size} color={color} style={{ margin: "auto" }} />
    ),
    [WeatherType.CLOUDY]: (
      <WiCloud size={size} color={color} style={{ margin: "auto" }} />
    ),
  };
};
