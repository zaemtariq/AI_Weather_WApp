import { Building2, SunSnow, Map, SlidersHorizontal } from "lucide-react";
import React from "react";
import { useStore } from "../store/store";
function LeftSideBar() {
  let { currentMenuDisplay, changeCurrentMenuDisplay } = useStore();
  return (
    <div className="leftSideBar p-3">
      <div className="sideBarWrapper h-screen w-[100px] bg-gray-600 rounded-2xl flex justify-center items-center flex-col">
        <SunSnow
          size={50}
          className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => changeCurrentMenuDisplay("Weather")}
        />
        <h3 className="text-white">Weather</h3>
        <br />
        <Building2
          size={50}
          className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => changeCurrentMenuDisplay("Cities")}
        />
        <h3 className="text-white">Cities</h3>
        <br />
        <Map
          size={50}
          className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => changeCurrentMenuDisplay("Maps")}
        />
        <h3 className="text-white">Maps</h3>
        <br />
        <SlidersHorizontal
          size={50}
          className="text-white hover:text-gray-400 transition-colors duration-300 cursor-pointer"
          onClick={() => changeCurrentMenuDisplay("Settings")}
        />
        <h3 className="text-white">Setting</h3>
      </div>
    </div>
  );
}

export default LeftSideBar;
