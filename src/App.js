import React, { useState } from "react";
import axios from "axios";

function App() {
  // stores the response data and the location sent to the api in state
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // brings in the API url to be queried
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b1fe57d7c51185c339fd5482541c08ef
  `;

  const searchLocation = (event) => {
    if (event.key === `Enter`) {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
    }
  };

  return (
    <div className="app">
      <div className="search">
        <input
          value={location}
          onChange={(event) => setLocation(event.target.value)}
          onKeyPress={searchLocation}
          placeholder="Please enter a location"
          type="text"
        ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>Omaha</p>
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
