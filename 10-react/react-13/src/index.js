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

class App extends Component {
  constructor() {
    super();
    this.state = {
      celcius: 0,
      fahrenheit: 0,
    };
  }

  // const [celcius, setCelcius] = useState(0);
  // [fahrenheit, setFahrenheit] = useState(0);

  convertFtoC(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
  }

  convertCtoF(celcius) {
    return (celcius * 9) / 5 + 32;
  }

  handleCelcius = (e) => {
    //setCelcius(e.target.value);
    //setFahrenheit(convertCtoF(e.target.value));
    this.setState({ celcius: e.target.value });
    this.setState({ fahrenheit: this.convertCtoF(e.target.value) });
  };

  handleFahrenheit = (e) => {
    // setFahrenheit(e.target.value);
    // setCelcius(convertFtoC(e.target.value));
    this.setState({
      fahrenheit: e.target.value,
      celcius: this.convertFtoC(e.target.value),
    });
  };

  render() {
    return (
      <>
        <TemperatureInput
          unit="c"
          temp={this.state.celcius}
          onChange={this.handleCelcius}
        />
        <TemperatureInput
          unit="f"
          temp={this.state.fahrenheit}
          onChange={this.handleFahrenheit}
        />
      </>
    );
  }
}

render(<App />, document.getElementById("root"));
