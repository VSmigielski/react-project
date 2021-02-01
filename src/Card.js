import React from "react";
import "./Card.css";

export default function Card() {
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <div className="row weather-forecast" id="forecast"></div>
        </div>
      </div>
    </div>
  );
}
