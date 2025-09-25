import WeatherSrc from "./WeatherSrc";
import { useDataStore } from "../store/dataStore";

export default function WeatherCenter() {
  const { current_Weather } = useDataStore();

  return (
    <div className="flex flex-col gap-6 p-6 w-full">
      <WeatherSrc />

      {/* City & Current Weather */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-5xl font-bold text-white">
            {current_Weather?.name ?? "New York"}
          </h1>
          <p className="text-gray-400">Chance of rain: 0%</p>
          <br />
          <br />
          <h2 className="text-6xl font-bold text-white mt-4">
            {current_Weather?.main?.temp
              ? `${current_Weather.main.temp}°`
              : "31°"}
          </h2>
        </div>

        <div className="w-48 h-48 rounded-full shadow-lg m-15">
          {current_Weather?.weather?.[0]?.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${current_Weather.weather[0].icon}@2x.png`}
              alt="weather icon"
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      {/* Today's Forecast */}
      <div className="bg-gray-800 rounded-2xl p-4">
        <h3 className="text-gray-300 font-semibold mb-4">TODAY'S FORECAST</h3>
        <div className="flex justify-between">
          {[
            { time: "6:00 AM", temp: "25°", icon: "☁️" },
            { time: "9:00 AM", temp: "28°", icon: "🌤️" },
            { time: "12:00 PM", temp: "33°", icon: "☀️" },
            { time: "3:00 PM", temp: "34°", icon: "☀️" },
            { time: "6:00 PM", temp: "32°", icon: "☀️" },
            { time: "9:00 PM", temp: "30°", icon: "🌤️" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-white">
              <span>{item.icon}</span>
              <span className="text-2xl">{item.time}</span>
              <span className="font-bold text-2xl">{item.temp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Air Conditions */}
      <div className="bg-gray-800 rounded-2xl p-8 grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-300">Real Feel</p>
          <p className="text-2xl font-bold text-white">
            {current_Weather?.main?.feels_like
              ? `${current_Weather.main.feels_like}°`
              : "31°"}
          </p>
        </div>
        <div>
          <p className="text-gray-300">Wind</p>
          <p className="text-2xl font-bold text-white">
            {current_Weather?.wind?.speed
              ? `${current_Weather.wind.speed} m/s`
              : "5 m/s"}
          </p>
        </div>
        <div>
          <p className="text-gray-300">Chance of rain</p>
          <p className="text-2xl font-bold text-white">0%</p>
        </div>
        <div>
          <p className="text-gray-300">Humidity</p>
          <p className="text-2xl font-bold text-white">
            {current_Weather?.main?.humidity ?? "50"}
          </p>
        </div>
      </div>
    </div>
  );
}
