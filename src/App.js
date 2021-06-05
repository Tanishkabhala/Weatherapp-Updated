import React from "react";
import { useSelector } from "react-redux";
import WeatherLoad from "./Components/WeatherLoad";
import AskCity from "./Components/AskCity";
import { CityName } from "./weather/Weather";

function App() {
  const city = useSelector(CityName);

  return (
    <div className='d-flex flex-column min-vh-100 p-5' style={{ backgroundColor: "purple" }}>
      {city ? <WeatherLoad city={city} /> : <AskCity />}
    </div>
  );
}

export default App;
