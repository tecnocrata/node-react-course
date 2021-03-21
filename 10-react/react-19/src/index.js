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
  // localStorage.setItem("formState", JSON.stringify(state));

  useEffect(() => {
    console.log("Effect after render");
    localStorage.setItem("formState", JSON.stringify(state));
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
