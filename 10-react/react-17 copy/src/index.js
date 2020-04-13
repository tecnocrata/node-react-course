import React, { useState, useReducer } from "react";
import { render } from "react-dom";

import "./style.css";

let initialState = {
  fields: Array(9).fill(false), // start with array of 9 with false filled in
  player1: "x",
  player2: "o",
  currentPlayer: 1,
};

function reducer(state, action) {
  console.log("state ", state);
  console.log("action ", action);
  switch (action) {
    case "HANDLE_PLAY":
      let fields = [...state.fields];
      let piece = state["player" + state.currentPlayer]; //x or o
      fields[action.data.index] = piece;
      return {
        ...state, // Object.assign ({}, state)
        fields: fields,
        currentPlayer: state.currentPlayer === 1 ? 2 : 1,
      };
      break;

    default:
      return state;
      break;
  }
}

function calculateInitialState() {
  return initialState;
}

function App() {
  // For mor complex scenarios
  // let [currState, updateState] = useState(calculateInitialState);
  // let [currState, updateState] = useState(initialState);
  let [currState, dispatch] = useReducer(reducer, initialState);

  console.log("currState", currState);

  function handleRestart() {
    // updateState({
    //   ...currState,
    //   fields: Array(9).fill(false),
    // });
    dispatch({
      type: "restart",
      data: {
        ...currState,
        fields: Array(9).fill(false),
      },
    });
  }

  function handlePlay(index, e) {
    // updateState({
    //   ...currState, // Object.assign ({}, currState)
    //   fields: fields,
    //   currentPlayer: currState.currentPlayer === 1 ? 2 : 1, // toggle between player  1 and 2
    // });
    dispatch({
      type: "HANDLE_PLAY",
      data: {
        index,
      },
    });
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
