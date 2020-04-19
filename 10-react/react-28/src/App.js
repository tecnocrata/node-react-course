import React from "react";
import PostForm from "./components/PostForm";
import AllFlights from "./components/AllFlights";
import logo from "./logo.svg";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Aeroline</h2>
      </div>
      <PostForm />
      <AllFlights />
    </div>
  );
}

export default App;
