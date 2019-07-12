import React, {Component} from 'react';
import './House.css'

class House extends Component {
    render() {
        const {listing} = this.props
        return (
            <div className='main-listing-container'>
                <div className='listing'>
                    <button onClick={() => this.props.deleteHouse(listing.id)}>&times;</button>
                    <h5>Property Name: {listing.property_name}</h5>
                    <h5>Address: {listing.address}</h5>
                    <h5>City: {listing.city}</h5>
                    <h5>State: {listing.state}</h5>
                    <h5>Zipcode: {listing.zip}</h5>
                </div>
            </div>
        )
    }
}

export default House; 