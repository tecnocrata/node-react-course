import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {
    handleSubmit = (e) => {
        e.preventDefault();
        const number = this.number.value;
        const origin = this.origin.value;
        const destination = this.destination.value;
        const departs = this.departs.value;
        const arrives = this.arrives.value;
        const data = {
            number,
            origin,
            destination,
            departs,
            arrives,
            editing: false
        }
        //console.log(data);
        this.props.dispatch({
            type: 'ADD_FLIGHT',
            data
        });
        this.number.value = '';
        this.origin.value = '';
        this.destination.value = '';
        this.departs.value = '';
        this.arrives.value = '';
    }

    render() {
        return (
            <div>
                <h1>Create Flight</h1>
                <form onSubmit={this.handleSubmit}>
                    <p>Number:
                    <input required type="number" placeholder="ex. 123456" name="number" ref={(input) => this.number = input} />
                    </p>
                    <p>Origin:
                    <input required type="text" placeholder="ex. SLC" name="origin" ref={(input) => this.origin = input} />
                    </p>
                    <p>Destination:
                    <input required type="text" placeholder="ex. CBBA" name="destination" ref={(input) => this.destination = input} />
                    </p>
                    <p>Departs:
                    <input required type="text" placeholder="ex. 12:00PM" name="departs" ref={(input) => this.departs = input} />
                    </p>
                    <p>Arrives:
                    <input required type="text" placeholder="ex. 18:00PM" name="arrives" ref={(input) => this.arrives = input} />
                    </p>
                    <button>Post</button>
                </form>
            </div>
        );
    }
}
export default connect()(PostForm);