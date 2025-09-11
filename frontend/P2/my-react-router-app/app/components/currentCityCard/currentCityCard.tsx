import {
  WiRaindrop,
  WiStrongWind,
  WiDust,
  WiThermometer,
} from "react-icons/wi";
import type { MappedWeatherData } from "~/@types/weatherDataTypes";
import { getWeatherIcon } from "~/utils/weatherUtils";

interface IForecastCard {
  data: MappedWeatherData;
}

export function CurrentCityCard(props: IForecastCard) {
  const { forecast, currentCity } = props.data;
  const { maxTemp, minTemp, water, wind, pressure, temp, dateLong, weather } =
    forecast[0]; // This is the latest data
  return (
    <div
      style={{ backgroundColor: "#4382F7" }}
      className="rounded-xl text-white p-5"
    >
      <p className="text-xs">{dateLong}</p>
      <p className="text-center text-2xl py-5">{currentCity.city}</p>
      <p className="text-center text-6xl">{maxTemp}</p>
      <p className="text-center text-xs">{minTemp + "~" + maxTemp}</p>
      <p className="text-center pt-5 pb-7">{getWeatherIcon(175)[weather]}</p>
      <div className="flex justify-center bg-white text-black gap-2 p-3 rounded-lg">
        <div>
          <WiRaindrop size={40} color={"#000"} />
          <p>{water}</p>
        </div>
        <div>
          <WiStrongWind size={40} color={"#000"} />
          <p>{wind}</p>
        </div>
        <div>
          <WiDust size={40} color={"#000"} />
          <p>{pressure}</p>
        </div>
        <div>
          <WiThermometer size={40} color={"#000"} />
          <p>{temp}</p>
        </div>
      </div>
    </div>
  );
}
