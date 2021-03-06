import React, {Component} from 'react';
import './House.css'

class House extends Component {
    render() {
        const {listing} = this.props
        return (
            <div className='outer-container'>
                <div className='inner-container'>
                        <button id='button' onClick={() => this.props.deleteHouse(listing.id)}>&times;</button>
                        <p>Property Name: {listing.property_name}</p>
                        <p>Address: {listing.address}</p>
                        <p>City: {listing.city}</p>
                        <p>State: {listing.state}</p>
                        <p>Zipcode: {listing.zip}</p>
                        <img className='img' src={listing.image} height='150px' width='200px'/>
                </div>
            </div>
        )
    }
}

export default House; 