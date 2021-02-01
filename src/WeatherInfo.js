import React from "react";
import FormattedDate from "./FormattedDate.js";

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
              <img
                src={props.data.icon}
                alt={props.data.description}
              />
              <span className="temperature">{Math.round(props.data.temperature)}</span>
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