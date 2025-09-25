import React from "react";
import data from "./cityListData.json";
import { useDataStore } from "../store/dataStore";
function WeatherSearch() {
  let [inputCity, setInputCity] = useState("");
  let { setLatLon, lat, lon } = useDataStore();
  function searchCity(query) {
    console.log(query);
    let citiesList = data.filter((city) => {
      setInputCity(query);
      return city.name.toLowerCase().includes(query.toLowerCase());
    });
    console.log(citiesList);
    // setLatLon(())
  }
  return (
    <div>
      <input
        // onChange={(e) => setInputCity(e.target.value)}
        onChange={(e) => searchCity(e.target.value)}
        type="text"
        value={"jj" + inputCity}
        placeholder="Search city"
        className="focus:outline-1 text-2xl outline-amber-50 p-3 rounded-lg bg-gray-800 text-white"
      />
    </div>
  );
}

export default WeatherSearch;
