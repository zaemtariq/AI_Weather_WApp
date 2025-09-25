import React, { useState } from "react";
import { Sun, CloudRain } from "lucide-react"; // You can replace with real weather icons

const citiesData = [
  { id: 1, name: "Madrid", time: "10:23", temp: 31, weather: "sunny" },
  { id: 2, name: "Vienna", time: "11:23", temp: 27, weather: "rain" },
  { id: 3, name: "Madrid", time: "10:23", temp: 31, weather: "sunny" },
  { id: 4, name: "Athens", time: "12:23", temp: 33, weather: "rain" },
];

export default function CityList() {
  const [selectedCity, setSelectedCity] = useState(1);

  return (
    <div className="w-full m-3 space-y-4">
      {citiesData.map((city) => (
        <div
          key={city.id}
          onClick={() => setSelectedCity(city.id)}
          className={`flex items-center justify-between p-4 rounded-2xl cursor-pointer transition 
          ${
            selectedCity === city.id
              ? "bg-gray-800 border border-blue-500"
              : "bg-gray-700"
          }`}
        >
          {/* Left side (Weather icon + city + time) */}
          <div className="flex items-center gap-3">
            {city.weather === "sunny" ? (
              <Sun size={40} className="text-yellow-400" />
            ) : (
              <CloudRain size={40} className="text-blue-400" />
            )}
            <div>
              <p className="font-semibold text-lg">{city.name}</p>
              <p className="text-gray-400 text-sm">{city.time}</p>
            </div>
          </div>

          {/* Right side (Temperature) */}
          <p className="text-xl font-bold">{city.temp}°</p>
        </div>
      ))}
    </div>
  );
}
