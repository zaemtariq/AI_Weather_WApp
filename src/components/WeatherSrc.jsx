import { useState } from "react";
import data from "./cityListData.json";
import { useDataStore } from "../store/dataStore";
function WeatherSrc() {
  // let citiesList = [];
  let { citiesList, setCitiesList } = useState([]);
  let [inputCity, setInputCity] = useState("");
  let [cityList, setCityList] = useState([]);
  let { fetchWeatherData, lat, lon } = useDataStore();
  function handleSelect(cIndx) {
    // console.log(cityList[cIndx]);
    fetchWeatherData(cityList[cIndx].coord.lat, cityList[cIndx].coord.lon);
    console.log(lat, lon);
    setInputCity(cityList[cIndx].name);
    setCityList([]);
  }
  async function searchCity(query) {
    // console.log(query);
    setInputCity(query);
    if (query.length <= 3) {
      setCityList([]);
      return;
    }
    citiesList = await data
      .filter((city) => {
        return city.name.toLowerCase().includes(query.toLowerCase());
      })
      .slice(0, 7);
    // console.log(citiesList[0].coord.lon);
    setCityList(citiesList);
  }
  return (
    <div>
      <input
        onChange={(e) => searchCity(e.target.value)}
        type="text"
        value={inputCity}
        placeholder="Search city"
        className="focus:outline-1 flex w-full text-2xl outline-amber-50 p-3 rounded-lg bg-gray-800 text-white"
      />
      {cityList.length > 0 && (
        <ul className="border fixed rounded-lg mt-2 bg-white shadow-lg w-lg ">
          {cityList.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(index)}
              className="p-2 cursor-pointer hover:bg-blue-100"
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WeatherSrc;
