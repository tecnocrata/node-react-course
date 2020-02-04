import React, { Component } from 'react';
//import { connect } from 'react-redux';
import axios from 'axios';

class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const origin = this.origin.value;
  const destination = this.destination.value;
  const data = {
    origin,
    destination
  }
  //this.props.dispatch({ type: 'UPDATE', number: this.props.flight.number, data: data });
  let number = this.props.flight.number;
  axios.put(`http://localhost:8080/api/flights/${number}`, data)
            .then(res => {
                console.log('Updated -->', res.data);
                this.props.update({
                  flights: this.props.flights.map((flight)=>{
                    if(flight.number === number) {
                      return {
                         ...flight,
                         origin:origin,
                         destination:destination,
                         editing: !flight.editing
                      }
                    } else return flight;
                  })
                })
            });
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="number" placeholder="ex. 123456" name="number" ref={(input) => this.number = input} defaultValue={this.props.flight.number} />
    <br /><br />
    <input required type="text" placeholder="ex. SLC" name="origin" ref={(input) => this.origin = input} defaultValue={this.props.flight.origin} />
    <br /><br />
    <input required type="text" placeholder="ex. TJA" name="destination" ref={(input) => this.destination = input} defaultValue={this.props.flight.destination} />
    <br /><br />
    <button>Update</button>
  </form>
</div>
);
}
}
//export default connect()(EditComponent);
export default EditComponent;