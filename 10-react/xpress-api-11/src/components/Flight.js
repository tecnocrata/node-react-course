import React, { Component } from 'react';
import {connect} from 'react-redux';

class Flight extends Component {
  render() {
  return (
    <div>
      <h2>{this.props.flight.number}</h2>
      <p>{this.props.flight.origin}</p>
      <button onClick={()=>this.props.dispatch({type:'EDIT_FLIGHT',number:this.props.flight.number})}>Edit</button>
      <button onClick={()=> this.props.dispatch({type:'DELETE_FLIGHT',number:this.props.flight.number})}>Delete</button>
    </div>
  );
 }
}
export default connect()(Flight);