import type { MappedWeatherData } from "~/@types/weatherDataTypes";
import { getWeatherIcon } from "~/utils/weatherUtils";

interface IForecastCard {
  data: MappedWeatherData;
}

export function OtherCityCard(props: IForecastCard) {
  const { currentCity, forecast } = props.data;
  const { minTemp, maxTemp, weather } = forecast[0];

  return (
    <div
      key={currentCity.city}
      className="rounded-xl p-6 text-center"
      style={{ backgroundColor: "#4382F7" }}
    >
      <p>{getWeatherIcon(40)[weather]}</p>
      <p className="font-bold mt-2">{currentCity.city}</p>
      <p className="text-xs">{minTemp + "~" + maxTemp}</p>
    </div>
  );
}
