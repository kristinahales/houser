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

    addHouse(house) {
        axios.post('/api/listings', house)
        .then(res => {
            this.setState({
                listings: res.data
            })
        })
        .catch(err => console.log(err));
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
                <p className='dashboard'>Dashboard</p>

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

            <Link to='/wizard' >
            <button>Add New Property</button>
            </Link>

            </div>
        )
    }
}

export default Dashboard; 