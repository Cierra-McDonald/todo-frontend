import React, { Component } from 'react'
import { loginExistingUser } from '../TodoPages/apiUtils.js'

export default class LoginPage extends Component {

    state = { 
        email: '',
        password: ''
    }


    handleEmailChange = (e) => { 
        // console.log(e.target.value)
        this.setState({ 
            email: e.target.value
        })
    }

    handlePasswordChange = (e) => { 

        this.setState({ 
            password: e.target.value
        })
    }

    handleSubmitButton = async (e) => { 
        e.preventDefault();
        console.log(this.state)
        const user = await loginExistingUser(this.state.email, this.state.password);

        this.props.handleUserChange(user); //getting the state from App.js and putting the user in localStorage


        this.props.history.push('/mytodolist') //redirects new user to todo list
        
    }
    render() {
        return (
            <div>
                <h2>Login Here!</h2>
                <form onSubmit={this.handleSubmitButton}>
                    <label>Email:
                    <input value={this.state.email} onChange={this.handleEmailChange}/><br/>
                    </label>
                    <label>Password:
                    <input value={this.state.password} onChange={this.handlePasswordChange}/><br/>
                    </label>
                <button>Login!</button>
                </form>
            </div>
        )
    }
}

