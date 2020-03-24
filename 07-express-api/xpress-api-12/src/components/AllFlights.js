import React, { Component } from 'react';
import { connect } from 'react-redux';
import Flight from './Flight';
import EditFlight from './EditFlight';
import axios from 'axios';

class AllFlights extends Component {

/*     state = {
        flights: []
      } */

    componentDidMount() {
        axios.get(`http://localhost:8080/api/flights`)
            .then(res => {
                //const fligths = res.data;
                let f = [];
                for (var key in res.data) {
                    if (res.data.hasOwnProperty(key)) {
                        //console.log(key + " -> " + res.data[key]);
                        f.push(res.data[key]);
                    }
                };
                console.log('FLIGHTS-->', f);
                this.props.update({
                    flights : f
                });
            });
    }

    render() {
        return (
            <div>
                <h1>All Flights</h1>
                {this.props.flights.map(flight=> 
                    (
                        <div key={flight.number}>
                            {flight.editing ? <EditFlight flight={flight} key={flight.id} flights={this.props.flights} update={this.props.update}/> :
                                <Flight key={flight.number} flight={flight} flights={this.props.flights} update={this.props.update}/>}
                        </div>
                    )                    
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        flights: state
    }
}

//export default connect(mapStateToProps)(AllFlights);
export default AllFlights;