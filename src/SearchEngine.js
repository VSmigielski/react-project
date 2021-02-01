import React, { useState } from "react";
import axios from "axios";
import Common from "./Common.js";
import './SearchEngine.css';
import FormattedDate from "./FormattedDate.js";


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
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }


  function updateCity(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=
    ${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function FormatMonthDay(){

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    
    return `${date}/${month}`
    }
 // function searchLocation(position) {
 //   let apiKey = "2be58cddf00b361ef70e0c8873c3ee84";
 //   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${
 //     position.coords.latitude
 //   }&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
 // 
 //   axios.get(apiUrl).then(showTemperature);
 // }

 // function getCurrentLocation(event) {
 //   event.preventDefault();
  //  navigator.geolocation.getCurrentPosition(searchLocation);
 // }

 // function showTemperature(response) {
 //   setNewCity(response.data.name);
 //   setTemperature(Math.round(response.data.main.temp));
  //  setDescription(response.data.weather[0].description);
  //  setHumidity(response.data.main.humidity);
  //  setWind(Math.round(response.data.wind.speed));
 //   setIcon(
 //     `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
 //   );
 // }

  let form = (
      <div onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city" autofocus="on" onChange={updateCity}
        auto-complete="off" />
      <input type="submit" value="Search" className="btn btn-success"/>
    </div>
  );

  let ul = (
    <div>
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{weatherData.city}</li>
            <li>{weatherData.description}</li>
            <li>{FormatMonthDay()}</li>
            <li>
              <div className="clearfix">
              <img
                src={weatherData.icon}
                alt={weatherData.description}
 
              />
              <span className="temperature">{Math.round(weatherData.temperature)}</span>
              <span className="unit"><a href="#0" className="active">
                °C
              </a>
              &nbsp;|&nbsp;
              <a href="#0">
                °F
              </a>
              </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Last updated:&nbsp; <FormattedDate date={weatherData.date}/>
            </li>
            <li>
              Humidity: {weatherData.humidity}%
            </li>
            <li>
              Wind: {Math.round(weatherData.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
  );

  
  

  if (weatherData.ready) {
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
    search();
    return (
      <div className="SearchEngine">
      {form}
      <Common />
      <h2>
      Loading...
      </h2>
      </div>
      );
  }
}
