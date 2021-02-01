import React from "react";
import './WeatherForecast.css';

export default function Card() {
  return (
    <div className="Card">
      <div className="card">
        <div className="card-body">
          <div className="row weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
