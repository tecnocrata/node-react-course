import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

function Section() {
  return (
    <div>
      <h2>El senior de los anillos</h2>
      <p style={{ fontSize: "12px", lineHeight: "16px" }}>
        En este episodio de la trilogía, el joven y tímido hobbit, Frodo Bolsón,
        hereda un anillo. Lejos de ser una simple baratija, se trata del Anillo
        único, un instrumento de poder que permitiría a Sauron, el Señor Oscuro,
        reinar en la Tierra Media y convertir en esclavos a sus habitantes.
      </p>
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
      name: "React",
    };
  }

  render() {
    return (
      <div>
        {/* <p>Start editing to see some magic happen :)</p> */}
        <Section />
        {/* <Section />
        <Section /> */}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
