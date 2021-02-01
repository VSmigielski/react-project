import React from "react";
import Search from "./Search.js";
import Common from "./Common.js";
import ParagraphText from "./ParagraphText.js";
import Card from "./Card.js";
import Footer from "./Footer.js";

export default function Form() {
  return (
    <form id="weather-form">
      <Search />
      <Common />
      <ParagraphText />
      <Card />
      <Footer />
    </form>
  );
}
