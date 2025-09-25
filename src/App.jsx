import React from "react";
// import LeftSideBar from "./components/LeftSideBar";
import LeftSideBar from "./components/leftSideBar";
import RightSideBar from "./components/rightSideBar";
import WeatherCenter from "./components/WeatherSection";
import Settings from "./components/Settings";
import CityList from "./components/CityList";
import { useStore } from "./store/store";
import { useDataStore } from "./store/dataStore";
import { LoaderCircle } from "lucide-react";
const componentsMap = {
  Weather: <WeatherCenter />,
  Settings: <Settings />,
  Cities: <CityList />,
};

function App() {
  let bol = true;
  const { currentMenuDisplay } = useStore();
  const { fetchPlaceId, fetchWeatherData, place_Id, loading } = useDataStore();
  return (
    <div className="bg-[#0f172a]">
      {/* Loader overlay */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <LoaderCircle className="size-20 animate-spin text-white" />
        </div>
      )}{" "}
      <div className="flex justify-between">
        <LeftSideBar />
        {componentsMap[currentMenuDisplay]}
        <RightSideBar />
      </div>
      <button onClick={() => fetchWeatherData()}>press Button </button>
    </div>
  );
}

export default App;
