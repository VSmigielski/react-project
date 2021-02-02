import React from "react";
import SearchEngine from "./SearchEngine";
import Footer from "./Footer";

export default function Form() {
  return (
    <div className="Form">
      <SearchEngine defaultCity="New York" />
      <Footer />
    </div>
  );
}
