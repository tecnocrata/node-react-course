import React, { useState, useReducer, useRef, useEffect } from "react";
import { render } from "react-dom";

import "./style.css";

let initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  msg: "",
  errors: [],
  hasLoaded: false,
};

function App() {
  let [state, setState] = useState(initialState);

  console.log("render");

  useEffect(fetchUserData, []);

  function fetchUserData() {
    fetch(
      "https://n89i8xbcal.execute-api.us-west-2.amazonaws.com/prod/react-intro-forms"
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        let savedName = jsonRes.name;
        setTimeout(() => {
          setState((prevState) => {
            return { ...prevState, name: savedName, hasLoaded: true };
          });
        }, 2000);
      });
  }

  function handleFormChange(e) {
    let newValue = e.target.value;
    let name = e.target.name;

    setState({
      ...state,
      [name]: newValue,
    });
  }

  function handleFormSubmit() {
    fetch(
      "https://n89i8xbcal.execute-api.us-west-2.amazonaws.com/prod/react-intro-forms",
      {
        method: "post",
        body: JSON.stringify(state),
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((jsonRes) => {
        console.log("jsonRes submit", jsonRes);

        if (jsonRes.success) {
          setState({ ...state, msg: jsonRes.msg });
        } else {
          setState({ ...state, errors: jsonRes.errors });
        }
      });
  }

  function handleFormReset() {
    setState({ ...state, ...initialState });
    fetchUserData();
  }

  if (!state.hasLoaded) return "Loading...";

  if (state.msg)
    return (
      <>
        <div className="msgContainer">{state.msg}</div>
        <button onClick={handleFormReset}>Reset Form</button>
      </>
    );

  let errs = state.errors.map((item) => {
    return <div className="error">{item.msg}</div>;
  });

  return (
    <>
      {errs}
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
      <button onClick={handleFormSubmit}>Submit</button>
    </>
  );
}

render(<App />, document.getElementById("root"));
