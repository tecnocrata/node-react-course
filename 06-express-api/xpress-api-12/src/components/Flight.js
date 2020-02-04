import React, { Component } from 'react';
//import {connect} from 'react-redux';
import axios from 'axios';

class Flight extends Component {

  handleDelete(number){
    //this.props.dispatch({type:'DELETE_FLIGHT',number});
    axios.delete(`http://localhost:8080/api/flights/${number}`)
            .then(res => {
                console.log('Deleted -->', res.data);
                console.log('props -->', this.props);
                this.props.update({
                  flights: this.props.flights.filter((flight)=>flight.number !== number)
                });
            });
  }

  handleEdit(number){
    this.props.update({
      flights: this.props.flights.map((flight)=>flight.number === number ? {...flight,editing:!flight.editing}:flight)
    })
  }

  render() {
  return (
    <div>
      <h2>{this.props.flight.number}</h2>
      <p>{this.props.flight.origin}</p>
      <button onClick={()=>this.handleEdit(this.props.flight.number)}>Edit</button>
      <button onClick={()=>this.handleDelete(this.props.flight.number)}>Delete</button>
    </div>
  );
 }
}
//export default connect()(Flight);
export default Flight;