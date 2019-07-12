import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: 0
        }
        this.handleChange = this.handleChange.bind(this);
        // this.addHouseToList = this.addHouseToList.bind(this);
    }

    // addHouseToList() {
    //         property_name: this.state.property_name,
    //         address: this.state.address,
    //         city: this.state.city,
    //         state: this.state.state,
    //         zip: this.state.state

    // }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        let {property_name, address, city, state, zip} = this.state
        return (
            <div>

                
            <Link to='/'>
            <button>Cancel</button>
            </Link>
            <br/>

            <label>Property Name:</label>
            <div><input name='property_name' value={property_name} onChange={this.handleChange}/></div>

            <label>Address:</label>
            <div><input name='address' value={address} onChange={this.handleChange}/></div>

            <label>City:</label>
            <div><input name='city' value={city} onChange={this.handleChange}/></div>

            <label>State:</label>
            <div><input name='state' value={state} onChange={this.handleChange}/></div>

            <label>Zip Code:</label>
            <div><input name='zip' value={zip} onChange={this.handleChange}/></div>

            <button onClick={this.addHouseToList}>Complete</button>
            </div>
        )

    }
}

export default Wizard; 