import React, { Component, useContext } from "react";
import { FlightContext } from "../context/flightContext";
//import {connect} from 'react-redux';

let Flight = (props) => {
  const { dispatch } = useContext(FlightContext);

  return (
    <div>
      <h2>{props.flight.number}</h2>
      <p>{props.flight.origin}</p>
      <button
        onClick={() =>
          dispatch({
            type: "EDIT_FLIGHT",
            number: props.flight.number,
          })
        }
      >
        Edit
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DELETE_FLIGHT",
            number: props.flight.number,
          })
        }
      >
        Delete
      </button>
    </div>
  );
};
export default Flight;
