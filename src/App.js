import React, { useState } from "react";
import axios from "axios";

export default function App() {
  // stores the response data and the location sent to the api in state
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  // brings in the API url to be queried
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=b1fe57d7c51185c339fd5482541c08ef
  `;

  const searchLocation = (event) => {
    if (event.key === `Enter`) {
      axios.get(url).then((response) => {
        setData(response.data);
        console.log(response.data);
      });
      setLocation(``);
    }
  };

  return (
    <div className="app">
      {" "}
      Test
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
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp} °F</h1> : null}
          </div>
          <div className="description">{data.weather[0].main}</div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
            <div className="feels like:">
              {data.main ? <p>Feels Like: {data.main.feels_like} °F</p> : null}
            </div>
            <div className="humidity">
              {data.main ? <p>Humidity: {data.main.humidity} %</p> : null}
            </div>
            <div className="wind">
              {data.main ? <p>Wind Speed: {data.wind.speed} Mph</p> : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
