import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let List = (props) => {
  let items = props.names.map((item) => <li key={item}>Hello {item}</li>);
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );
};

List.defaultProps = {
  names: ["Enrique", "Sam"],
};

List.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string),
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
    };
  }

  render() {
    return (
      <div>
        <p>List :</p>
        <List />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
