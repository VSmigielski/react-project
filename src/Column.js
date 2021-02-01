import React from "react";
import "./Column.css";

export default function Column() {
  let weatherData = {
    city: "Wommelgem",
    temperature: 11,
    day: "18/1",
    description: "Clear",
    date: "Monday 03:00",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10
  };
  return (
    <div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weatherData.city}</li>
            <li>{weatherData.description}</li>
            <li>{weatherData.day}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                id="icon"
                className="float-left"
              />
              <span id="temperature-text">{weatherData.temperature}</span>
              <a href="#0" className="active">
                °C
              </a>
              &nbsp;|&nbsp;
              <a href="#0">
                °F
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li id="day-time">
              Last updated:&nbsp; {weatherData.date}
            </li>
            <li>
              Humidity: {weatherData.humidity}%
            </li>
            <li>
              Wind: {weatherData.wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
