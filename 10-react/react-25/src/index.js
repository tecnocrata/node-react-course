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

import "./style";

function App() {
  return (
    <Router>
      <Nav />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact/:country" component={Contact} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

function Nav() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/about?myname=enrique">About</Link> |{" "}
      <Link to="/contact/bolivia">Contact</Link> |{" "}
      <Link to="/arstrast">arstarst</Link>
    </>
  );
}

function Home() {
  return <p>Home Page Content</p>;
}

function About() {
  var params = new URLSearchParams(useLocation().search); //hook
  var name = params.get("myname");
  return <p>About Page content for {name}</p>;
}

function Contact() {
  var params = useParams();
  return <p>Contact Page content for {params.country}</p>;
}

function NotFound() {
  return <p>Oh No! Page not found.</p>;
}

render(<App />, document.getElementById("root"));
