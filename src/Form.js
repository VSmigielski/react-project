import React from "react";
import SearchEngine from "./SearchEngine.js";
import Card from "./WeatherForecast.js";
import Footer from "./Footer.js";

export default function Form() {
  return (
    <div className="Form">
      <SearchEngine defaultCity="New York" />
      <Card />
      <Footer />
    </div>
  );
}
