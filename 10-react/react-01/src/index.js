import React, { Component } from "react";
import { render } from "react-dom";
//import Hello from './Hello';
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        {/* <Hello name={this.state.name} /> */}
        <p>Start editing to see some magic happen :)</p>
        <div>
          <h1>Contacts</h1>
          <ul>
            <li>
              <h2>James Nelson</h2>
              <a href="mailto:james@jamesknelson.com">james@jamesknelson.com</a>
            </li>
            <li>
              <h2>Joe Citizen</h2>
              <a href="mailto:joe@example.com">joe@example.com</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
