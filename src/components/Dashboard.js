import React, {Component} from 'react';
import House from './House';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            listings: []
        }
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    componentDidMount() {
        axios.get('/api/listings')
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
    }

    deleteHouse(id) {
        axios.delete(`/api/listings/${id}`)
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <div className='dashboard'>
                    <p>Dashboard</p>
                    <Link to='/wizard' >
                    <button className='dashboard-button'>Add New Property</button>
                    </Link>
                </div>

            {
                this.state.listings.map(listing => {
                    return (
                        <House 
                        key={listing.id}
                        listing={listing}
                        deleteHouse={this.deleteHouse}/>
                    )
                })
            }

            </div>
        )
    }
}

export default Dashboard; 