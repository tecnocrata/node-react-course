import React, { useState, useReducer } from "react";
import { render } from "react-dom";

import "./style.css";

function App() {
  return (
    <>
      <fieldset>
        <label>Your Name</label>
        <br />
        <input placeholder="Enrique Ortuno" />
      </fieldset>
      <fieldset>
        <label>Your Email</label>
        <br />
        <input placeholder="enrique@ortuno.net" />
      </fieldset>
      <fieldset>
        <label>Your Subject</label>
        <br />
        <input placeholder="Whatever Topic you want" />
      </fieldset>
      <fieldset>
        <label>Your Message</label>
        <br />
        <textarea placeholder="Enter your message here" rows="10" cols="60" />
      </fieldset>
      <button>Submit</button>
    </>
  );
}

render(<App />, document.getElementById("root"));
