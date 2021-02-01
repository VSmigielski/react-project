import React, { useState } from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function showCelsius(event) {
        event.preventDefault();
        setUnit("celsius");
    }

    function fahrenheit() {
        return Math.round((props.celsius * 9/5) + 32);
    }

    if (unit === "celsius") {
    return (
        <span className="WeatherTemperature">
            <span className="temperature">{Math.round(props.celsius)}</span>
              <span className="unit active">
                °C {""} | {""} 
              <a href="#0" className="unit" onClick={showFahrenheit}>
                °F
              </a>
              </span>
        </span>
    ); } else {
        return (
            <span className="WeatherTemperature">
            <span className="temperature">{fahrenheit()}</span>
              <span className="unit active">
              <a href="#0" className="unit" onClick={showCelsius}>
                °C
                </a>
              {""} | {""} °F
              </span>
        </span>
   ); }
}