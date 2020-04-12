import React, { Component, useState } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let unitTable = {
  c: "Celcius",
  f: "Fahrenheit",
};

function convertFtoC(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function convertCtoF(celcius) {
  return (celcius * 9) / 5 + 32;
}

let TemperatureInput = (props) => {
  let [temp, setTemp] = useState(0);

  function handleTempChange(e) {
    setTemp(e.target.value);
  }

  return (
    <fieldset>
      <label>{unitTable[props.unit]}</label>
      <br />
      <input value={temp} onChange={handleTempChange} />
    </fieldset>
  );
};

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <TemperatureInput unit="c" />
        <TemperatureInput unit="f" />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
