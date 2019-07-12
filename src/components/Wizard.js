import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Wizard.css';
import axios from 'axios';


class Wizard extends Component {
    constructor() {
        super();
        this.state = {
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
            img: ''

        }
        this.handleChange = this.handleChange.bind(this);
        this.addHouse = this.addHouse.bind(this);
    }

    addHouse(property_name, address, city, state, zip) {
        axios.post('/api/listings', {property_name, address, city, state, zip})
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
        this.resetInput();
    }

    resetInput() {
        this.setState({
            property_name: '',
            address: '',
            city: '',
            state: '',
            zip: 0,
        })
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        let {property_name, address, city, state, zip} = this.state
        return (
            <div className='main-container'> 
                <div>
                    <div className='button'>
                        <p>Add to Inventory</p>
                        <Link to='/'>
                        <button className='button2'>Cancel</button>
                        </Link>
                    </div>

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

                    <button onClick={() => this.addHouse(property_name, address, city, state, zip)}>Complete</button>
                </div>

            </div>
        )

    }
}

export default Wizard; 