import React, {Component} from 'react';


class House extends Component {
    render() {
        const {listing} = this.props
        return (
            <div>
                <button>&times;</button>
                <h5>Property Name: {listing.property_name}</h5>
                <h5>Address: {listing.address}</h5>
                <h5>City: {listing.city}</h5>
                <h5>State: {listing.state}</h5>
                <h5>Zipcode: {listing.zip}</h5>

            </div>
        )
    }
}

export default House; 