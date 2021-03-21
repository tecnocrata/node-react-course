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

let App = () => {
  // constructor() {
  //   super();
  //   this.state = {
  //     celcius: 0,
  //     fahrenheit: 0,
  //   };
  // }

  // const [celcius, setCelcius] = useState(0);
  // [fahrenheit, setFahrenheit] = useState(0);

  let [temps, setTemps] = useState({
    celcius: 0,
    fahrenheit: 0,
  });

  function convertFtoC(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  let convertCtoF = (celcius) => {
    return (celcius * 9) / 5 + 32;
  };

  let handleCelcius = (e) => {
    //setCelcius(e.target.value);
    //setFahrenheit(convertCtoF(e.target.value));
    // this.setState({ celcius: e.target.value });
    // this.setState({ fahrenheit: convertCtoF(e.target.value) });
    setTemps({
      fahrenheit: convertCtoF(e.target.value),
      celcius: e.target.value,
    });
  };

  let handleFahrenheit = (e) => {
    // setFahrenheit(e.target.value);
    // setCelcius(convertFtoC(e.target.value));
    setTemps({
      fahrenheit: e.target.value,
      celcius: convertFtoC(e.target.value),
    });
  };

  return (
    <>
      <TemperatureInput
        unit="c"
        temp={temps.celcius}
        onChange={handleCelcius}
      />
      <TemperatureInput
        unit="f"
        temp={temps.fahrenheit}
        onChange={handleFahrenheit}
      />
    </>
  );
};

render(<App />, document.getElementById("root"));
