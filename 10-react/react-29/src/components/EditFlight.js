import React, { Component, useContext, useState } from "react";
import { FlightContext } from "../context/flightContext";
// import { connect } from 'react-redux';

let EditComponent = (props) => {
  const { dispatch } = useContext(FlightContext);
  const [flight, setFlight] = useState(props.flight);
  let handleSubmit = (e) => {
    e.preventDefault();
    // const origin = this.origin.value;
    // const destination = this.destination.value;
    // const data = {
    //   origin,
    //   destination,
    // };
    const data = { origin: flight.origin, destination: flight.destination };
    dispatch({
      type: "UPDATE",
      number: flight.number,
      data,
    });
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
      <form onSubmit={handleSubmit}>
        <input
          required
          type="number"
          placeholder="ex. 123456"
          name="number"
          value={flight.number}
          readOnly
        />
        <br />
        <br />
        <input
          required
          type="text"
          placeholder="ex. SLC"
          name="origin"
          value={flight.origin}
          onChange={handleFormChange}
        />
        <br />
        <br />
        <input
          required
          type="text"
          placeholder="ex. TJA"
          name="destination"
          value={flight.destination}
          onChange={handleFormChange}
        />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};
export default EditComponent;
