import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

function List(props) {
  let items = props.names.map(item => <li>Hello {item}</li>);
  // Conditional Category 1
  if (props.name[1] === "Sam") {
    return <h2>Sam not allowed</h2>;
  }

  return (
    <div>
      <ul>{items}</ul>
    </div>
  );

  //Conditional Category 2
  //How to hide h2 if there is NO sam?
  // let errorMsg = "";
  // if (props.name[1] === "Sam") {
  //   errorMsg = "Sam not allowed";
  // }
  // return (
  //   <div>
  //     <h2>{errorMsg}</h2>
  //     <ul>{items}</ul>
  //   </div>
  // );
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
        <p>List :</p>
        <List names={["Enrique", "Sam"]} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
