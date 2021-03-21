import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";
import "./style.css";

let Score = (props) => {
  function increaseScore(e) {
    e.preventDefault();
    console.log("Increase!");
    props.count++;
  }
  return (
    <div>
      <p>
        Score is {props.count} for the {props.name}
      </p>
      <button onClick={increaseScore}>+</button>
      <button>-</button>
      <button>Reset</button>
    </div>
  );
};

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
        <Score name="Wolverines" count={0} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
