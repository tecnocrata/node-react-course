import React, { Component } from "react";
// import { connect } from "react-redux";
import Flight from "./Flight";
import EditFlight from "./EditFlight";
import { useReducer } from "react";
import flightReducer from "../reducers/flightReducer";
import { useContext } from "react";
import { FlightContext } from "../context/flightContext";

let AllFlights = (props) => {
  //const [flights, dispatch] = useReducer(flightReducer, []);
  const { flights } = useContext(FlightContext);
  return (
    <div>
      <h1>All Flights</h1>
      {flights.map((flight) => (
        <div key={flight.number}>
          {flight.editing ? (
            <EditFlight flight={flight} key={flight.id} />
          ) : (
            <Flight key={flight.number} flight={flight} />
          )}
        </div>
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     flights: state,
//   };
// };

export default AllFlights;
