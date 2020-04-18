import React, { useState, useReducer, useRef, useEffect } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

import "./style.css";

function App() {
  return (
    <Router>
      <Nav />
      {/*<Home /> */}
      <Route path="/" exact component={Home} />
      {/* <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} /> */}
    </Router>
  );
}

function Nav() {
  return (
    // <>
    //   <a href="">Home</a> | <a href="">About</a> | <a href="">Contact</a> |{" "}
    //   <a href="">arstarst</a>
    // </>
    <>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
      <Link to="/contact">Contact</Link> | <Link to="/arstrast">arstarst</Link>
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

function NotFound() {
  return <p>Oh No! Page not found.</p>;
}

render(<App />, document.getElementById("root"));
