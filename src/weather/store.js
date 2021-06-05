import { configureStore } from "@reduxjs/toolkit";
import WeatherReducer from "./Weather";

export default configureStore({
  reducer: {
    weather: WeatherReducer,
  },
});
