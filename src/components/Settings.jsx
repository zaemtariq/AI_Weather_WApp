import React, { useState } from "react";

export default function Settings() {
  const [temperature, setTemperature] = useState("Celsius");
  const [windSpeed, setWindSpeed] = useState("km/h");
  const [pressure, setPressure] = useState("mm");
  const [precipitation, setPrecipitation] = useState("Millimeters");
  const [distance, setDistance] = useState("Kilometers");
  const [notifications, setNotifications] = useState(true);

  const buttonClass = (active) =>
    `px-4 py-2 rounded-md transition ${
      active ? "bg-blue-500 text-white" : " text-gray-300"
    }`;
const defaultUnits ={
  Temperate: "Celsius",
  WindSpeed: "m/s",
  Pressure: "mm",
  Precipitation: "Millimeters",
  Distance: "Kilometers"
}
  return (
    <div className="text-white p-6 bg-gray-900 min-h-screen w-full">
      {/* Units Section */}
      <div>
        <h2 className="text-xl font-bold mb-4">Units</h2>
        <div className="bg-gray-800 p-5 rounded-2xl space-y-5">
          {/* Temperature */}
          <div>
            <p className="mb-2 font-semibold">TEMPERATURE</p>
            <div className="flex  gap-2 bg-gray-900 p-2 rounded-md">
              <button
                onClick={() => setTemperature("Celsius")}
                className={`${buttonClass(temperature === "Celsius")} w-full`}
              >
                Celsius
              </button>
              <button
                onClick={() => setTemperature("Fahrenheit")}
                className={`${buttonClass(
                  temperature === "Fahrenheit"
                )} w-full`}
              >
                Fahrenheit
              </button>
            </div>
          </div>

          {/* Wind Speed */}
          <div>
            <p className="mb-2 font-semibold">WIND SPEED</p>
            <div className="flex gap-2 bg-gray-900 p-2 rounded-md">
              {["km/h", "m/s", "Knots"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setWindSpeed(unit)}
                  className={`${buttonClass(windSpeed === unit)} w-full`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          {/* Pressure */}
          <div>
            <p className="mb-2 font-semibold">PRESSURE</p>
            <div className="flex gap-2 bg-gray-900 p-2 rounded-md">
              {["hPa", "Inches", "kPa", "mm"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setPressure(unit)}
                  className={`${buttonClass(pressure === unit)}  w-full`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          {/* Precipitation */}
          <div>
            <p className="mb-2 font-semibold">PRECIPITATION</p>
            <div className="flex gap-2 bg-gray-900 p-2 rounded-md">
              {["Millimeters", "Inches"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setPrecipitation(unit)}
                  className={`${buttonClass(precipitation === unit)}  w-full`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>

          {/* Distance */}
          <div>
            <p className="mb-2 font-semibold">DISTANCE</p>
            <div className="flex gap-2 bg-gray-900 p-2 rounded-md">
              {["Kilometers", "Miles"].map((unit) => (
                <button
                  key={unit}
                  onClick={() => setDistance(unit)}
                  className={`${buttonClass(distance === unit)}  w-full`}
                >
                  {unit}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="mt-10">
        <h2 className="text-xl font-bold mb-4">Notifications</h2>
        <div className="bg-gray-800 p-5 rounded-2xl flex items-center justify-between">
          <div>
            <p className="font-semibold">Notifications</p>
            <p className="text-gray-400 text-sm">Be aware of the weather</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-600 rounded-full peer peer-checked:bg-blue-500 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full" />
          </label>
        </div>
      </div>
    </div>
  );
}
