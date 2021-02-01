import React from "react";
import SearchEngine from "./SearchEngine.js";
import Card from "./WeatherForecast.js";
import Footer from "./Footer.js";

export default function Form() {
  return (
    <form id="weather-form">
      <SearchEngine defaultCity="New York" />
      <Card />
      <Footer />
    </form>
  );
}
