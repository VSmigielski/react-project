import React from "react";
import "./Header.css";

export default function Search() {
  return (
    <div>
      <input
        type="search"
        placeholder="Enter a city"
        autofocus="on"
        auto-complete="off"
      />
      <button type="submit" className="btn btn-success">
        Search
      </button>
      <button
        type="submit"
        className="btn btn-primary"
      >
        Current
      </button>
    </div>
  );
}