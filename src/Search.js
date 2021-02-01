import React from "react";
import "./Header.css";

export default function Search() {
  return (
    <div>
      <input
        id="search-text-input"
        type="search"
        placeholder="Enter a city"
        autofocus="on"
        auto-complete="off"
      />
      <button type="submit" id="search" className="btn btn-success">
        Search
      </button>
      <button
        type="submit"
        id="current-location-button"
        className="btn btn-primary"
      >
        Current
      </button>
    </div>
  );
}