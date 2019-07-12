import React, {Component} from 'react';
import House from './House';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            listings: []
        }
    }

    componentDidMount() {
        axios.get('/api/listings')
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
    }
    
    render() {
        return (
            <div>Dashboard

            {
                this.state.listings.map(listing => {
                    return (
                        <House 
                        key={listing.id}
                        listing={listing}
                        />
                    )
                })
            }

            <Link to='/wizard'>
            <button>Add New Property</button>
            </Link>

            </div>
        )
    }
}

export default Dashboard; 