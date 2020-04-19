import React, { Component } from "react";
// import { connect } from 'react-redux';

let EditComponent = (props) => {
  let handleEdit = (e) => {
    e.preventDefault();
    const origin = this.origin.value;
    const destination = this.destination.value;
    const data = {
      origin,
      destination,
    };
    props.dispatch({
      type: "UPDATE",
      number: props.flight.number,
      data: data,
    });
  };
  return (
    <div>
      <form onSubmit={handleEdit}>
        <input
          required
          type="number"
          placeholder="ex. 123456"
          name="number"
          ref={(input) => (this.number = input)}
          defaultValue={props.flight.number}
          readonly
        />
        <br />
        <br />
        <input
          required
          type="text"
          placeholder="ex. SLC"
          name="origin"
          ref={(input) => (this.origin = input)}
          defaultValue={props.flight.origin}
        />
        <br />
        <br />
        <input
          required
          type="text"
          placeholder="ex. TJA"
          name="destination"
          ref={(input) => (this.destination = input)}
          defaultValue={props.flight.destination}
        />
        <br />
        <br />
        <button>Update</button>
      </form>
    </div>
  );
};
export default EditComponent;
