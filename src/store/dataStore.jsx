import { create } from "zustand";
import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const API_BASE = import.meta.env.VITE_API_ENDPOINT;

export const useDataStore = create((set, get) => ({
  place: "karachi",
  lat: "",
  lon: "",
  unit: "metric",
  current_Weather: [],
  hourly_Forecast: [],
  daily_Forecast: [],
  citiesList: [],
  loading: false,
  error: null,

  // ✅ Update place & unit
  searchPlace: (newPlace) => set({ place: newPlace }),
  setUnit: (newUnit) => set({ unit: newUnit }),
  setLatLon: (Lat, Lon) => set({ lat: Lat, lon: Lon }),
  // ✅ Get Place ID
  // fetchPlaceId: async () => {
  //   const { place } = get();
  //   set({ loading: true, error: null });

  //   try {
  //     const url = `${API_BASE}/find_places?text=${place}&key=${API_KEY}`;
  //     const { data } = await axios.get(url);

  //     if (data?.length > 0) {
  //       const id = data[0].place_id;
  //       set({ placeId: id, loading: false });
  //       console.log("📍 Place ID:", id);
  //       return id;
  //     } else {
  //       throw new Error("No place found");
  //     }
  //   } catch (err) {
  //     set({ error: err.message, loading: false });
  //     console.error("❌ fetchPlaceId error:", err.message);
  //   }
  // },

  // ✅ Get Weather Data
  fetchWeatherData: async (Lat, Lon) => {
    set({ loading: true, error: null, lat: Lat, lon: Lon });

    try {
      const { unit, lat, lon } = get();

      const currentWeatherApi = `${API_BASE}lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
      const hourlyForecastApi = `https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=${lat}&lon=${lon}&units=${unit}&appid=${API_KEY}`;
      const dailyForecastApi = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=7&units=${unit}&appid=${API_KEY}`;

      // Fire all requests in parallel 🚀
      const [currentWeather, hourlyForecast, dailyForecast] = await Promise.all(
        [
          axios.get(currentWeatherApi),
          axios.get(hourlyForecastApi),
          axios.get(dailyForecastApi),
        ]
      );

      set({
        current_Weather: currentWeather.data,
        hourly_Forecast: hourlyForecast.data,
        daily_Forecast: dailyForecast.data,
        loading: false,
      });

      console.log("🌦 Weather Data:", {
        current: currentWeather.data,
        hourly: hourlyForecast.data,
        daily: dailyForecast.data,
      });
    } catch (err) {
      set({ error: err.message, loading: false });
      console.error("❌ fetchWeatherData error:", err.message);
    }
  },

  // ✅ Clear state
  clearData: () => set({ placeId: "", weatherInfo: [], error: null }),
}));
