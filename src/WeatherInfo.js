import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";
import WeatherTemperature from "./WeatherTemperature.js";

export default function WeatherInfo(props) {
    function FormatMonthDay(){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        
        return `${date}/${month}`
        }
    return (
        <div className="WeatherInfo">
      <div className="row">
        <div className="col-6">
          <ul>
            <li>{props.data.city}</li>
            <li>{props.data.description}</li>
            <li>{FormatMonthDay()}</li>
            <li>
              <div className="clearfix">
              <WeatherIcon code={props.data.icon} alt={props.data.description}/>   
              <WeatherTemperature celsius={props.data.temperature}/>
              </div>
            </li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li>
              Last updated:&nbsp; <FormattedDate date={props.data.date}/>
            </li>
            <li>
              Humidity: {props.data.humidity}%
            </li>
            <li>
              Wind: {Math.round(props.data.wind)} km/h
            </li>
          </ul>
        </div>
      </div>
      <br />
    </div>
    );
}