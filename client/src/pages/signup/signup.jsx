
import './signup.scss'

import React, { Component } from 'react'

export class Signup extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             signinContainer : "container",
             email: '',
             password : '',
             name : '',
             
        }
        
    }
    toggleOn() {
        this.setState({signinContainer : "container right-panel-active"})
        
    }
    toggleOff(){
        this.setState({signinContainer : "container "})

    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };
    
    

    render() {
        
        return (
            <div>
            <div class={ this.state.signinContainer } id="container">
                <div class="form-container sign-up-container">
                    <form action="/">
                        <h1>{this.state.password}</h1>
                        <div className="social-container">

                        </div>
                        
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange} />
                        <a href="/">Forgot your password?</a>
                        <button onClick= { this.toggleOff.bind(this) } >Sign Up</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="/">
                        <h1>Sign in</h1>
                        <div class="social-container">
                            
                        </div>
                        
                        
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="/">Forgot your password?</a>
                        <button >SIGN IN</button>
                    </form>
                </div>
                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button class="ghost" id="signIn " onClick= { this.toggleOff.bind(this) }>Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button class="ghost" id="signUp " onClick= { this.toggleOn.bind(this) }>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>

    </div>
        )
    }
}
