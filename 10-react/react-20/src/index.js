import React, { useState, useReducer, useRef, useEffect } from "react";
import { render } from "react-dom";

import "./style.css";

let initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function App() {
  let [state, setState] = useState(initialState);

  // Side effect!!!!
  // It runs in every render!!!! modifying the DOM maybe
  //localStorage.setItem("formState", JSON.stringify(state));

  // It is used to keep track a counter thru all renders
  let counter = useRef(1);

  // It will run after every render
  // It will run after state changes because the render ocurrs after the state changes
  // here you could include ajax calls, api calls, mutate the DOM directly
  useEffect(() => {
    //if we don't use this block the state is not retrieved
    // if (state === initialState) {
    //   // if (counter === 1) {
    //   let savedState = JSON.parse(localStorage.getItem("formState"));
    //   setState({
    //     ...state,
    //     ...savedState,
    //   });
    // }

    // NOTE: be VERY careful updating state in an effect, because this can easily cause an infinite loop...
    // setState({
    //   ...savedState
    //   // test: "prop"
    // });

    localStorage.setItem("formState", JSON.stringify(state));

    // console.log("counter", counter);
    counter.current++;
  });

  console.log("render");

  function handleFormChange(e) {
    let newValue = e.target.value;
    let name = e.target.name;

    setState({
      ...state,
      [name]: newValue, //state indexed by name
    });
  }

  return (
    <>
      <fieldset>
        <label>Your Name</label>
        <br />
        <input
          value={state.name}
          name="name"
          placeholder="Alex Trebeck"
          onChange={handleFormChange}
        />
      </fieldset>
      <fieldset>
        <label>Your Email</label>
        <br />
        <input
          value={state.email}
          onChange={handleFormChange}
          name="email"
          placeholder="alex@gmail.com"
        />
      </fieldset>
      <fieldset>
        <label>Your Subject</label>
        <br />
        <input
          name="subject"
          value={state.subject}
          onChange={handleFormChange}
          placeholder="Whatever Topic you want"
          style={{ width: 250 }}
        />
      </fieldset>
      <fieldset>
        <label>Your Message</label>
        <br />
        <textarea
          name="message"
          value={state.message}
          onChange={handleFormChange}
          placeholder="Enter your message here"
          rows="10"
          cols="60"
        />
      </fieldset>
      <button>Submit</button>
    </>
  );
}

render(<App />, document.getElementById("root"));
