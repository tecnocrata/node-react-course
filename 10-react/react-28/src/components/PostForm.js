import React, { Component, useState, useReducer } from "react";
import flightReducer from "../reducers/flightReducer";

let PostForm = () => {
  const emptyFlight = {
    number: "",
    origin: "",
    destination: "",
    departs: "",
    arrives: "",
    editing: false,
  };
  const [flight, setFlight] = useState(emptyFlight);
  const [flights, dispatch] = useReducer(flightReducer);
  let handleSubmit = (e) => {
    e.preventDefault();
    // const number = this.number.value;
    // const origin = this.origin.value;
    // const destination = this.destination.value;
    // const departs = this.departs.value;
    // const arrives = this.arrives.value;
    // const data = {
    //   number,
    //   origin,
    //   destination,
    //   departs,
    //   arrives,
    //   editing: false,
    // };
    //console.log(data);

    // this.number.value = "";
    // this.origin.value = "";
    // this.destination.value = "";
    // this.departs.value = "";
    // this.arrives.value = "";
    const data = flight;
    dispatch({
      type: "ADD_FLIGHT",
      data,
    });
    setFlight(emptyFlight);
  };

  function handleFormChange(e) {
    let newValue = e.target.value;
    let name = e.target.name;

    setFlight({
      ...flight,
      [name]: newValue,
    });
  }

  return (
    <div>
      <h1>Create Flight</h1>
      <form onSubmit={handleSubmit}>
        <p>
          Number:
          <input
            required
            type="number"
            placeholder="ex. 123456"
            name="number"
            value={flight.number}
            onChange={handleFormChange}
          />
        </p>
        <p>
          Origin:
          <input
            required
            type="text"
            placeholder="ex. SLC"
            name="origin"
            value={flight.origin}
            onChange={handleFormChange}
          />
        </p>
        <p>
          Destination:
          <input
            required
            type="text"
            placeholder="ex. CBBA"
            name="destination"
            value={flight.destination}
            onChange={handleFormChange}
          />
        </p>
        <p>
          Departs:
          <input
            required
            type="text"
            placeholder="ex. 12:00PM"
            name="departs"
            value={flight.departs}
            onChange={handleFormChange}
          />
        </p>
        <p>
          Arrives:
          <input
            required
            type="text"
            placeholder="ex. 18:00PM"
            name="arrives"
            value={flight.arrives}
            onChange={handleFormChange}
          />
        </p>
        <button>Post</button>
      </form>
    </div>
  );
};
export default PostForm;
