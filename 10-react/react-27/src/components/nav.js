import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation,
  useParams,
} from "react-router-dom";

export function Nav() {
  return (
    <>
      <Link to="/">Home</Link> | <Link to="/about?name=enrique">About</Link> |{" "}
      <Link to="/contact/bolivia">Contact</Link> |{" "}
      <Link to="/arstrast">arstarst</Link>
    </>
  );
}
