import type { ForecastDisplayItem } from "~/@types/weatherDataTypes";
import { getWeatherIcon } from "~/utils/weatherUtils";

interface IForecastCard {
  data: ForecastDisplayItem;
}

export function ForecastCard(props: IForecastCard) {
  const { date, day, weather, minTemp, maxTemp } = props.data;
  return (
    <div key={date} className="text-center">
      <p className="font-bold">{day}</p>
      <p className="text-xs">{date}</p>
      <p className="mt-4 text-center">{getWeatherIcon(150, "#000")[weather]}</p>
      <p className="text-xs">{minTemp + "~" + maxTemp}</p>
    </div>
  );
}
