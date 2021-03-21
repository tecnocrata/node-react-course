import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let Score = (props) => {
  let score = props.score;
  function increaseScore(e) {
    e.preventDefault();

    score++;
    console.log("Increase score! ", score);
  }
  return (
    <div>
      <p>
        Score is {score} for the {props.name}
      </p>
      <button onClick={increaseScore}>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
};

Score.defaultProps = {};

Score.propTypes = {};

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
        <Score name="Wolverines" score={10} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
