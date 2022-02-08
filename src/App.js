import React, { useState } from "react";
import axios from "axios";
import ApiKey from "./ApiKey";

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Dallas</p>
          </div>
          <div className="temp">
            <h1>60 degrees f</h1>
          </div>
          <div className="description">Clouds</div>
        </div>
        <div className="bottom">
          <div className="feels like:">
            <p>65 degrees f</p>{" "}
          </div>
          <div className="humidity">
            <p>20%</p>
          </div>
          <div className="wind">
            <p>12 mph</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
