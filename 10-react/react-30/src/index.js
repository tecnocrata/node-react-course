import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppState from './AppState';
//import { createStore } from 'redux';
//import { Provider } from 'react-redux';


import flightReducer from './reducers/flightReducer';
//const store = createStore(flightReducer);
ReactDOM.render(
    <AppState>
    <App />
  </AppState>, document.getElementById('root'));