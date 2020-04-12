import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let List = (props) => {
  let tooManyItems =
    props.names.length > 3 ? "There are too many items in the list" : null;
  let items = props.names.map((item) => <li key={item}>Hello {item}</li>);
  return (
    <div>
      {tooManyItems && <h2>{tooManyItems}</h2>}
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
