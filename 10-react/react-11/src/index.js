import React, { Component, useState } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

// class Score extends Component {
//   constructor(props) {
//     super(props);
//     this.props = props;
//   }
//   increaseScore() {
//     console.log("Increase!");
//   }
//   render() {
//     return (
//       <div>
//         <p>Score is 0 for the {this.props.name}</p>
//         <button onClick={this.increaseScore}>+</button>
//         <button>-</button>
//         <button>Reset</button>
//       </div>
//     );
//   }
// }

let Score = (props) => {
  let [score, setScore] = useState(props.score);
  function increaseScore(e) {
    e.preventDefault();
    //score++;
    setScore(score + 1);
    console.log("Increase score!. ", score);
    // let newState = score + 1;
    // setScore(newState);
    // console.log("Increase score!. ", newState);
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
        <Score name="Wolverines" score={0} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
