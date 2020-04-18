import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

function List(props) {
  let items = props.names.map((item) => <li>Hello {item}</li>);
  return (
    <div>
      <ul>{items}</ul>
    </div>
  );

  // return (
  //   <div>
  //     <ul>{props.names.map(item => <li key={item}>Hello {item}</li>)}</ul>
  //   </div>
  // );
}

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
        <List names={["Enrique", "Sam"]} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
