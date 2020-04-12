import React, { Component, useState } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let unitTable = {
  c: "Celcius",
  f: "Fahrenheit",
};

let TemperatureInput = (props) => {
  // let [temp, setTemp] = useState(0);

  // function handleTempChange(e) {
  //   setTemp(e.target.value);
  // }

  return (
    <fieldset>
      <label>{unitTable[props.unit]}</label>
      <br />
      <input value={props.temp} onChange={props.onChange} />
    </fieldset>
  );
};

function App() {
  const [celcius, setCelcius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(0);

  function convertFtoC(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  function convertCtoF(celcius) {
    return (celcius * 9) / 5 + 32;
  }

  let handleCelcius = (e) => {
    setCelcius(e.target.value);
    setFahrenheit(convertCtoF(e.target.value));
    // this.setState({ celcius: e.target.value });
    // this.setState({ fahrenheit: this.convertCtoF(e.target.value) });
  };

  let handleFahrenheit = (e) => {
    setFahrenheit(e.target.value);
    setCelcius(convertFtoC(e.target.value));
    // this.setState({
    //   fahrenheit: e.target.value,
    //   celcius: this.convertFtoC(e.target.value),
    // });
  };

  return (
    <>
      <TemperatureInput unit="c" temp={celcius} onChange={handleCelcius} />
      <TemperatureInput
        unit="f"
        temp={fahrenheit}
        onChange={handleFahrenheit}
      />
    </>
  );
}

render(<App />, document.getElementById("root"));
