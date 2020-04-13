import React, { useState } from "react";
import { render } from "react-dom";

import "./style.css";

let initialState = {
  fields: Array(9).fill(false), // start with array of 9 with false filled in
  player1: "x",
  player2: "o",
  currentPlayer: 1,
};

function App() {
  let [currState, updateState] = useState(initialState);

  console.log("currState", currState);

  function handleRestart() {
    updateState({
      ...currState,
      fields: Array(9).fill(false),
    });
  }

  function handlePlay(index, e) {
    // //let fields = currState.fields.concat();
    // //let fields = currState.fields;
    // let piece = currState["player" + currState.currentPlayer]; //x or o

    // // fill in the current piece, and switch player
    // currState.fields[index] = piece;
    // currState.currentPlayer = currState.currentPlayer === 1 ? 2 : 1; // toggle between player  1 and 2

    let fields = [...currState.fields];
    let piece = currState["player" + currState.currentPlayer]; //x or o

    fields[index] = piece;
    updateState({
      ...currState, // Object.assign ({}, currState)
      fields: fields,
      currentPlayer: currState.currentPlayer === 1 ? 2 : 1, // toggle between player  1 and 2
    });

    console.log(currState);
  }

  let fields = currState.fields.map((item, i) => {
    if (!item) {
      return (
        <div key={i} onClick={handlePlay.bind(this, i)} className="field empty">
          &nbsp;
        </div>
      );
    }

    return (
      <div key={i} className="field">
        {item.toUpperCase()}
      </div>
    );
  });

  return (
    <div>
      <button className="clearButton" onClick={handleRestart}>
        Clear
      </button>
      <div className="fieldContainer">{fields}</div>
    </div>
  );
}

render(<App />, document.getElementById("root"));
