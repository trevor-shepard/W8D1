import React, { Component } from 'react';
import { Link } from 'react-router-dom'


class Greeting extends Component {
    render() {
        if (this.props.currentUser) {
            return (
                <div>
                    <span>Welcome Friend!</span>
                    <button onClick={ this.props.logout }>Logout</button>
                </div>
                )
        } else {
            return (
                <div>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </div>
            )
        }
    }
}

export default Greeting;