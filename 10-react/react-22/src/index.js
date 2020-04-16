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

  let counter = useRef(1);

  let nameField = useRef(null);

  // It will run after every render
  useEffect(() => {
    if (state === initialState) {
      // if (counter === 1) {
      let savedState = JSON.parse(localStorage.getItem("formState"));
      setState({
        ...state,
        ...savedState,
      });
    }

    localStorage.setItem("formState", JSON.stringify(state));

    // console.log("counter", counter);
    counter.current++;
  });

  useEffect(() => {
    nameField.current.focus();
  }, []);

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
          ref={nameField}
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
