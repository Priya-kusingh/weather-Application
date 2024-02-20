import React, { useState } from "react";
import "./WeatherApp.css";

import drizzle_icon from "../image/drizzle.png";
import clear_icon from '../image/clear.png';
import humidity_icon from "../image/humidity.png";
import rain_icon from "../image/rain.jpg";
import snow_icon from "../image/snow.png";
import wind_icon from "../image/wind.png";
import thounde_icon from '../image/thounde.jpg';
import weathe1_icon from "../image/weathe1.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const WeatherApp = () => {
  alert('Enter your location', ' ');
  let api_key = "72cd6747c6230ecc2d1ecaaab0350d15";
  const [weathericon, setWeathericon] = useState(weathe1_icon)
  const search = async () => {
    const element = document.getElementsByClassName("cityInput");
    if (element[0].value === "") {
      return 0;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    let humidity = document.getElementsByClassName("humidity-per");
    const wind = document.getElementsByClassName("wind-rat");
    const temprature = document.getElementsByClassName("weather-temp");
    const location = document.getElementsByClassName("weather-loca");

    
    humidity[0].innerHTML = data.main.humidity + "%";
    wind[0].innerHTML = Math.floor(data.wind.speed)+ " km/h";
    temprature[0].innerHTML = Math.floor(data.main.temp )+ " °c";
    location[0].innerHTML = data.name;
    if(data.weather[0].icon==='01d' || data.weather[0]==='01n'){
      setWeathericon(thounde_icon);
    }
    else if(data.weather[0].icon==='02d' || data.weather[0]==='02n'){
      setWeathericon(weathe1_icon);
    }
    else if(data.weather[0].icon==='03d' || data.weather[0]==='03n'){
      setWeathericon(drizzle_icon);
    }
    else if(data.weather[0].icon==='04d' || data.weather[0]==='04n'){
      setWeathericon(drizzle_icon);
    }
    else if(data.weather[0].icon==='09d' || data.weather[0]==='09n'){
      setWeathericon(rain_icon);
    }
    else if(data.weather[0].icon==='10d' || data.weather[0]==='10n'){
      setWeathericon(weathe1_icon);
    }
    else if(data.weather[0].icon==='13d' || data.weather[0]==='13n'){
      setWeathericon(snow_icon);
    }
    else{
      setWeathericon(clear_icon);
    }
  };
  return (
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" />
        <div
          className="search-icon"
          onClick={() => {
            search();
          }}
        >
          <FontAwesomeIcon icon={faMagnifyingGlass} />

        </div>
      </div>
      <div className="weather-image">
        <img src={weathericon} alt="" />
      </div>
      <div className="weather-temp">24°c</div>
      <div className="weather-loca" >India</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="humidity-per">64%</div>
            <div className="text">Humidity</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="wind-rat">18 km/h</div>
            <div className="text">Wind-Speed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
