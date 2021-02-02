import React, { useState } from "react";
import axios from "axios";
import './WeatherForecast.css';
import WeatherForecastPreview from "./WeatherForecastPreview"

export default function WeatherForecast(props) {

  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
  setForecast(response.data);
  setLoaded(true);
  }
  
  if (loaded && props.city === forecast.city.name) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
      <div className="card">
        <div className="card-body">
          <div className="row">
            {forecast.list.slice(0, 6).map(function (forecastItem) {
              return <WeatherForecastPreview data={forecastItem}/>;
            })}
      </div>
    </div>
      </div>
      </div>
      );
  } else {
  let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleForecastResponse);
  return null;
}
}
