import React, { Component } from "react";
// import { connect } from "react-redux";
import Flight from "./Flight";
import EditFlight from "./EditFlight";
import { useReducer } from "react";
import flightReducer from "../reducers/flightReducer";

let AllFlights = (props) => {
  const [flights, dispatch] = useReducer(flightReducer, []);
  return (
    <div>
      <h1>All Flights</h1>
      {flights.map((flight) => (
        <div key={flight.id}>
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
