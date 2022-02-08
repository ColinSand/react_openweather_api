import React, { useState } from "react";
import axios from "axios";
import ApiKey from "./ApiKey";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // after looking at stack overflow, looks like api keys will still be shown even with a gitignore file used
  // adding the key back directly into the App.js component
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1fe57d7c51185c339fd5482541c08ef
  `;

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
