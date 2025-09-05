
import { WiDaySunny, WiCloud,WiStrongWind,WiDust,WiThermometer, WiRaindrop } from "react-icons/wi";




enum WeatherType{
  SUNNY = "sunny",
  CLOUDY = "cloudy",

}


const getWeatherIcon = (size = 24,color='#fff')=>{
  return{
  [WeatherType.SUNNY]:<WiDaySunny size={size} color={color} style={{margin:"auto"}}/>,
  [WeatherType.CLOUDY]:<WiCloud size={size} color={color} style={{margin:"auto"}}/>

  }
}

const weatherMap ={

}
const sampleData = {
  currentCity: {
    date: "23 July,Sunday 12:00",
    city: "MEB",
    minTemp: "32",
    maxTemp: "39",
    weather: WeatherType.SUNNY,
    water: "85%",
    wind: "9km/h",
    uv: "75ug",
    indoor: "26",
  },

  forecast: [
    {
      day: "Monday",
      date: "24 July",
      weather: WeatherType.CLOUDY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      day: "Monday",
      date: "24 July",
      weather: WeatherType.CLOUDY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      day: "Monday",
      date: "24 July",
      weather: WeatherType.CLOUDY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      day: "Monday",
      date: "24 July",
      weather: WeatherType.CLOUDY,
      minTemp: "28",
      maxTemp: "35",
    },
  ],
  otherCities: [
    {
      city: "Melbourne",
      weather: WeatherType.SUNNY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      city: "Melbourne",
      weather:  WeatherType.SUNNY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      city: "Melbourne",
      weather:  WeatherType.SUNNY,
      minTemp: "28",
      maxTemp: "35",
    },
    {
      city: "Melbourne",
      weather:  WeatherType.SUNNY,
      minTemp: "28",
      maxTemp: "35",
    },
  ],
};

export function WeatherHome() {
  return (
    <main className="flex items-center justify-center pt-16 pb-4" 
    style={{backgroundColor:"#624ADC", minHeight:"100vh"}}>

      <div className="flex gap-2 p-5 rounded-xl" 
      style={{background:"#F2F2FC"}}>
        <div style={{ backgroundColor: '#4382F7' }}
          className="rounded-xl text-white p-5"
        >   
          <p className="text-xs ">{sampleData.currentCity.date}</p>
          <p className="text-center text-2xl py-5">{sampleData.currentCity.city}</p>
          <p className="text-center text-6xl">{sampleData.currentCity.maxTemp}</p>
          <p className="text-center text-xs">
            {sampleData.currentCity.minTemp +
              "~" +
              sampleData.currentCity.maxTemp}
          </p>
          <p className="text-center pt-5 pb-7">

{getWeatherIcon(175)[sampleData.currentCity.weather]}

             </p>

          <div className="flex justify-center bg-white text-black gap-2 p-4 rounded-xl">
            <div>




<WiRaindrop size={40} color={"#000"}/>
              <p>{sampleData.currentCity.water}</p>
            </div>

            <div>

              <WiStrongWind size={40} color={"#000"}/>

              <p>{sampleData.currentCity.wind}</p>
            </div>

            <div>

              <WiDust size={40} color={"#000"}/>

              <p>{sampleData.currentCity.uv}</p>
            </div>

            <div>

              <WiThermometer size={40} color={"#000"}/>

              <p>{sampleData.currentCity.indoor}</p>
            </div>
          </div>
        </div>


        <div> 
          {/* //右边大区 */}

          <div className="flex justify-between">
          {/* //右上 */}
            {sampleData.forecast.map((item) => {
              return (
                <div key={item.date} className="text-center  ">
                  <p className="font bold">{item.day}</p>
                  <p className="text-xs">{item.date}</p>
                  <p className="mt-4">
                    {getWeatherIcon(150,'#000')[item.weather]}
                    
                    </p>

                  <p className="text-xs">{item.minTemp + "~" + item.maxTemp}</p>
                </div>
              );
            })}
          </div>





{/* //这里是搜索框 */}

          <div className=" mt-25">

            {/* 整个右下区域 */}

            <div className="mb-5 relative" style={{width:"50%" }}>
          <input className="input-default" type="text" placeholder="Search for a city" />



            <button className="button-default" type="button">Search</button>
              
            </div>





            <div className="flex justify-between gap-5 text-white">
 {sampleData.otherCities.map((item) => {
              return (
                <div 
                key={item.city} 
                style={{background:"#4382F7"}}
                className="rounded-xl p-6 text-center"
                >
                  <p>{getWeatherIcon(40)[item.weather]}</p>
                  <p className="font-bold mt-2">{item.city}</p>
                  <p className="text-xs">{item.minTemp + "~" + item.maxTemp}</p>
                </div>
              );
            })}


            </div>
            
           
          </div>

        </div>

      </div>
    </main>
  );
}
