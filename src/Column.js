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
            <li id="city-text">{weatherData.city}</li>
            <li id="description">{weatherData.description}</li>
            <li id="day-month-text">{weatherData.day}</li>
            <li>
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                alt="Clear"
                id="icon"
                className="float-left"
              />
              <span id="temperature-text">{weatherData.temperature}</span>
              <a href="" id="celsius-link" className="active">
                °C
              </a>
              &nbsp;|&nbsp;
              <a href="" id="fahrenheit-link">
                °F
              </a>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li id="day-time">
              Last updated:&nbsp;
              <span id="day-time-text">{weatherData.date}</span>
            </li>
            <li>
              Humidity: <span id="humidity">{weatherData.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );
}
