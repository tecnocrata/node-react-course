import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

function Section(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p style={{ fontSize: "12px", lineHeight: "16px" }}>props.description</p>
      <a
        target="_blank"
        href="https://www.imdb.com/title/tt0120737/?ref_=ttls_li_tt"
      >
        Visitar la pelicula
      </a>
    </div>
  );
}

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
        <Section />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
