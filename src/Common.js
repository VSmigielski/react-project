import React, { useState } from "react";
import axios from "axios";

export default function Common(props) {
   const [weatherData, setWeatherData] = useState({ ready: false });
  
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
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

  return (
    <div>
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
        {weatherData.city}
      </p>
      <br />
    </div>
  );
}
