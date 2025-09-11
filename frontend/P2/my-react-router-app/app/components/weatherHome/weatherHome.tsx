import { useEffect, useState } from "react";

import {
  getCurrentCityForecastData,
  type OpenWeatherForecastResponse,
} from "~/api/openWeatherApi";
import { fromUnixTime, format } from "date-fns";
import { Bounce, toast } from "react-toastify";
import { ForecastCard } from "../forecastCard/forecastCard";
import { OtherCityCard } from "../otherCityCard/otherCityCard";

import { SearchCityInput } from "../input/searchCityInput";
import { CurrentCityCard } from "../currentCityCard/CurrentCityCard";
import { WeatherType, WeatherTypeMap } from "~/@enum/weatherType";
import type { MappedWeatherData } from "~/@types/weatherDataTypes";
import { Loading } from "../loading/loading";

export function WeatherHome() {
  const [data, setData] = useState<MappedWeatherData>();
  const [searchCity, setSearchCity] = useState("");
  const [otherCitiesData, setOtherCitiesData] = useState<MappedWeatherData[]>(
    []
  );

  const mapData = (data: OpenWeatherForecastResponse): MappedWeatherData => {
    const filteredData = data.list
      .filter((item) => item.dt_txt.includes("12:00"))
      .map((item) => {
        const dt = item.dt;
        const date = fromUnixTime(Number(dt));

        return {
          day: format(date, "iii"),
          date: format(date, "d MMMM"),
          dateLong: format(date, "d MMMM, EEEE HH:mm"),
          weather: WeatherTypeMap[item.weather[0].icon],
          minTemp: parseInt(item.main.temp_min),
          maxTemp: parseInt(item.main.temp_max),
          humidity: item.main.humidity,
          pressure: item.main.pressure,
          temp: parseInt(item.main.temp),
          grnd_level: item.main.grnd_level,
          water: item.main.sea_level,
          wind: item.wind.speed,
        };
      });

    return {
      currentCity: {
        city: data.city.name,
      },
      forecast: filteredData,
    };
  };

  const getWeatherData = async (city = "melbourne") => {
    const weatherData = await getCurrentCityForecastData(city).catch(() => {
      toast.error("Cannot find city", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
      return;
    });
    if (!weatherData?.data) {
      return;
    }
    return mapData(weatherData.data);
  };

  useEffect(() => {
    const getCitiesData = async () => {
      const currentCityResult = await getWeatherData();
      setData(currentCityResult);
      const otherCitiesResult = await Promise.all([
        getWeatherData("sydney"),
        getWeatherData("brisbane"),
        getWeatherData("perth"),
        getWeatherData("adelaide"),
      ]);
      const filterResults =
        otherCitiesResult.filter(
          (data) => data !== undefined && data !== null
        ) ?? [];
      setOtherCitiesData(filterResults);
    };
    getCitiesData();
  }, []);

  const onSearchCity = () => {
    getWeatherData(searchCity);
  };

  if (!data) {
    return (
      <div
        className="flex items-center justify-center pt-16 pb-4"
        style={{ height: "100vh" }}
      >
        <Loading />
      </div>
    );
  }

  return (
    <main
      className="flex items-center justify-center pt-16 pb-4"
      style={{ backgroundColor: "#624adc", minHeight: "100vh" }}
    >
      <div
        className="flex gap-2 p-6 rounded-xl"
        style={{ backgroundColor: "#F2F2FC" }}
      >
        <CurrentCityCard data={data} />
        <div>
          <div className="flex justify-between">
            {data.forecast.slice(1, 5).map((item) => {
              return <ForecastCard data={item} />;
            })}
          </div>
          <div className="mt-25">
            <SearchCityInput
              onClickCity={onSearchCity}
              searchCity={searchCity}
              onChangeSearch={(city) => setSearchCity(city)}
            />
            <div className="flex justify-between text-white gap-3">
              {otherCitiesData.length === 0 ? (
                <Loading />
              ) : (
                otherCitiesData?.map((item) => {
                  return <OtherCityCard data={item} />;
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
