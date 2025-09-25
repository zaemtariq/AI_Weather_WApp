import { Sun, Cloud, CloudRain } from "lucide-react";

const forecastData = [
  {
    day: "Today",
    temp: "36/22",
    icon: <Sun className="text-yellow-400 w-6 h-6" />,
    status: "Sunny",
  },
  {
    day: "Tue",
    temp: "37/21",
    icon: <Sun className="text-yellow-400 w-6 h-6" />,
    status: "Sunny",
  },
  {
    day: "Wed",
    temp: "37/21",
    icon: <Sun className="text-yellow-400 w-6 h-6" />,
    status: "Sunny",
  },
  {
    day: "Thu",
    temp: "37/21",
    icon: <Cloud className="text-gray-400 w-6 h-6" />,
    status: "Cloudy",
  },
  {
    day: "Fri",
    temp: "37/21",
    icon: <Cloud className="text-gray-400 w-6 h-6" />,
    status: "Cloudy",
  },
  {
    day: "Sat",
    temp: "37/21",
    icon: <CloudRain className="text-blue-400 w-6 h-6" />,
    status: "Rainy",
  },
  {
    day: "Sun",
    temp: "37/21",
    icon: <Sun className="text-yellow-400 w-6 h-6" />,
    status: "Sunny",
  },
];

function RightSideBar() {
  return (
    <div className="bg-gray-600 rounded-2xl p-5 text-white w-112">
      <h2 className="text-lg font-semibold mb-5">7-DAY FORECAST</h2>
      <div className="space-y-4">
        {forecastData.map((day, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between bg-[#1e293b] rounded-xl p-3 hover:bg-[#334155] transition"
          >
            <div className="flex items-center space-x-3">
              {day.icon}
              <div>
                <p className="font-medium">{day.day}</p>
                <p className="text-sm text-gray-400">{day.status}</p>
              </div>
            </div>
            <p className="text-sm font-semibold">{day.temp}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RightSideBar;
