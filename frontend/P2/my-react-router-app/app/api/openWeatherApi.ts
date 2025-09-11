import axios from "axios";
// 引入 axios 库，用来发 HTTP 请求

export interface OpenWeatherForecastResponse {
// 定义接口 OpenWeatherForecastResponse，用来描述天气 API 返回的数据结构
  cod: string;         // 返回状态码，比如 "200"
  message: string;     // 额外信息
  cnt: string;         // 返回的数据数量
  list: ForecastEntry[]; // 天气预报的数组，每一项是 ForecastEntry 类型
  city: CityInfo;      // 城市信息，类型是 CityInfo
}

export interface ForecastEntry {
// 定义单条预报的数据结构
  dt: string; // 时间戳
  main: {     // 主体天气信息
    temp: string;       // 当前温度
    feels_like: string; // 体感温度
    temp_min: string;   // 最低温
    temp_max: string;   // 最高温
    pressure: string;   // 气压
    sea_level: string;  // 海平面气压
    grnd_level: string; // 地面气压
    humidity: string;   // 湿度
    temp_kf: string;    // 温度修正值
  };
  weather: {            // 天气现象数组
    id: string;         // 天气 ID
    main: string;       // 天气主类，比如 Rain
    description: string;// 天气描述
    icon: string;       // 天气图标 ID
  }[];
  clouds: { all: string }; // 云量
  wind: {               // 风信息
    speed: string;      // 风速
    deg: string;        // 风向角度
    gust: string;       // 阵风
  };
  visibility: string;   // 能见度
  pop: string;          // 降水概率
  rain?: { "3h": string }; // 可选，3小时降水量
  sys: { pod: string }; // 时间段（白天/晚上）
  dt_txt: string;       // 可读的日期时间
}

export interface CityInfo {
// 定义城市信息的数据结构
  id: string;          // 城市 ID
  name: string;        // 城市名
  coord: {             // 坐标
    lat: string;       // 纬度
    lon: string;       // 经度
  };
  country: string;     // 国家代码
  population: string;  // 人口
  timezone: string;    // 时区
  sunrise: string;     // 日出时间
  sunset: string;      // 日落时间
}

export const getCurrentCityForecastData = async (
// 定义一个异步函数，用来获取城市天气数据
  cityName: string = "Melbourne" // 默认城市是 Melbourne
) => {
  const key = "d124156a6891227117a47c8c985555e7"; // API key

  const cityData = await axios.get(
  // 调用 OpenWeatherMap 的 geo API，用城市名换取坐标
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}`
  );

  if (!cityData.data) {
    return; // 如果没有返回数据，直接结束
  }

  return axios.get<OpenWeatherForecastResponse>(
  // 调用天气预报 API，用经纬度获取 5 天的天气数据
    `https://api.openweathermap.org/data/2.5/forecast?lat=${cityData.data[0].lat}&lon=${cityData.data[0].lon}&appid=${key}&units=metric`
  );
};
