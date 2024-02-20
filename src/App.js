import React from "react";
// import "./App.css";
import WeatherApp from "./component/WeatherApp/WeatherApp";

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        <WeatherApp />
      </div>
      <div className="footer-info">Developed by | Priya Kushwaha | (2024)</div>
    </React.Fragment>
  );
};

export default App;
