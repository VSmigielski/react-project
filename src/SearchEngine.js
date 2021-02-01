import React, { useState } from "react";
import axios from "axios";
import Common from "./Common.js";
import './SearchEngine.css';

export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [newCity, setNewCity] = useState(null);
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(showTemperature);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function showTemperature(response) {
    // console.log(response.data);
    setLoaded(true);
    setNewCity(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(
      `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    // alert(Math.round(response.data.main.temp));
  }

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

  let form = (
    <div onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" onChange={updateCity} autofocus="on"
        auto-complete="off" />
      <button type="submit" className="btn btn-success">
        Search
      </button>
        <button
        type="submit"
        className="btn btn-primary"
        onClick={getCurrentLocation}
      >
        Current
    </button>
    </div>
  );

  let ul = (
    <div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{newCity}</li>
            <li>{description}</li>
            <li>{weatherData.day}</li>
            <li>
              <img
                src={icon}
                alt={description}
                className="float-left"
              />
              <span>{temperature}</span>
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
            <li>
              Last updated:&nbsp; {weatherData.date}
            </li>
            <li>
              Humidity: {humidity}%
            </li>
            <li>
              Wind: {wind} km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );

  
  let ulDiv = (
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
            <li>
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

  if (loaded === true) {
    return (
      <div className="SearchEngine">
        {form}
        <Common />
        <h2>
        {ul}
        </h2>
      </div>
    );
  } else {
    return (
      <div>
      {form}
      <Common />
      <h2>
        {ulDiv}
      </h2>
      </div>
      );
  }
}
