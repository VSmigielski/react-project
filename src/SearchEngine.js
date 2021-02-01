import React, { useState } from "react";
import axios from "axios";
import './SearchEngine.css';
import WeatherInfo from "./WeatherInfo.js";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searchLocation(position) {
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
      position.coords.latitude
    }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
  }

  function getCurrentLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function updateParis(event) {
    event.preventDefault();
    let city = "Paris";
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function updateAmsterdam(event) {
    event.preventDefault();
    let city = "Amsterdam";
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function updateNewYork(event) {
    event.preventDefault();
    let city = "New York";
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  
  function updateTokyo(event) {
    event.preventDefault();
    let city = "Tokyo";
    let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  let form = (
      <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" autofocus="on" onChange={handleCityChange}
        auto-complete="off" />
      <input type="submit" value="Search" className="btn btn-success"/>
      <input type="submit" value="Current" className="btn btn-primary" onClick={getCurrentLocation}/>
      </form>
  );

  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        {form}
        <p>
        Commonly Searched: &nbsp;&nbsp;
        <a href="#0" onClick={updateParis}>
          Paris 
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateAmsterdam}>
          Amsterdam
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateNewYork}>
          New York
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateTokyo}>
          Tokyo
        </a>
      </p>
      <br />
        <h2>
        <WeatherInfo data={weatherData}/>
        </h2>
      </div>
    );
  } else {
    search();
    return (
      <div className="SearchEngine">
        {form}
        <p>
        Commonly Searched: &nbsp;&nbsp;
        <a href="#0" onClick={updateParis}>
          Paris 
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateAmsterdam}>
          Amsterdam
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateNewYork}>
          New York
        </a>{" "}
        &nbsp;&nbsp;
        <a href="#0" onClick={updateTokyo}>
          Tokyo
        </a>
      </p>
      <br />
      <h2>
      Loading...
      </h2>
      </div>
      );
  }
}
