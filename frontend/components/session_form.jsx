import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class SessionForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: "",
          password: ""
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const user = Object.assign({}, this.state)
        this.props.processForm(user);
        this.setState( {
            username: "",
            password: ""
          });
    }

    handleInput(field) {
        return (e) => {
            this.setState({[field]: e.target.value}) 
        };
    }

    render() {
        let link
        if (this.props.formType === 'login') {
            link = <Link to='/signup'>Sign Up</Link>
        } else {
            link = <Link to='/login'>Log In</Link>
        }
        let errors = this.props.errors.map((error) => <span>{ error }</span>)
        return (
            <div>
                <header> {this.props.formType} </header>
                <div>
                    { errors }
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Username:
                        <input type="text" onChange={this.handleInput('username')} value={this.state.username} />
                    </label>
                    
                    <label>
                        Password:
                        <input type="password" onChange={this.handleInput('password')} value={this.state.password} />
                    </label>
                    <button type='submit'>{this.props.formType}</button>
                </form>
                { link }
            </div>  
        );
    }

}

export default SessionForm;