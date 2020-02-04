import React, { Component } from 'react';
import PostForm from './components/PostForm';
import AllFlights from './components/AllFlights'; //AllPost


class App extends Component {
  render() {
    const state = this.props.appState;
    return (
    <div className="App">
      <div className="navbar">
        <h2 className="center ">Aeroline</h2>
      </div>
        <PostForm flights={state.flights} update={this.props.setAppState}/>
        <AllFlights flights={state.flights} update={this.props.setAppState}/>
    </div>
    );
    }
  }
export default App;