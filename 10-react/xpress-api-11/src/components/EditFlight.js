import React, { Component } from 'react';
import { connect } from 'react-redux';


class EditComponent extends Component {
handleEdit = (e) => {
  e.preventDefault();
  const origin = this.origin.value;
  const destination = this.destination.value;
  const data = {
    origin,
    destination
  }
  this.props.dispatch({ type: 'UPDATE', number: this.props.flight.number, data: data })
}
render() {
return (
<div>
  <form onSubmit={this.handleEdit}>
    <input required type="number" placeholder="ex. 123456" name="number" ref={(input) => this.number = input} defaultValue={this.props.flight.number} readonly />
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
export default connect()(EditComponent);