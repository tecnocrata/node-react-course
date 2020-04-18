import React, { useState, useReducer, useRef, useEffect } from "react";
import { render } from "react-dom";

import "./style.css";

function App() {
  return (
    <>
      <Nav />
      <Home />
    </>
  );
}

function Nav() {
  return (
    <>
      <a href="">Home</a> | <a href="">About</a> | <a href="">Contact</a> |{" "}
      <a href="">arstarst</a>
    </>
  );
}

function Home() {
  return <p>Home Page Content</p>;
}

function About() {
  return <p>About Page content</p>;
}

function Contact() {
  return <p>Contact Page content</p>;
}

render(<App />, document.getElementById("root"));
