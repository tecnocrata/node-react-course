import React, { createContext, useReducer } from "react";
import reducer from "../reducers/flightReducer";
export const FlightContext = createContext();

const FlightProvider = ({ children }) => {
  const [flights, dispatch] = useReducer(reducer, []);

  return (
    <FlightContext.Provider value={{ flights, dispatch }}>
      {children}
    </FlightContext.Provider>
  );
};

export default FlightProvider;
