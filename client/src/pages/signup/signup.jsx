import './signup.scss'
import React, { Component } from 'react'
import fire from '../../firebase/firebase.utils'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.login = this.login.bind(this)
        this.signup = this.signup.bind(this)
        this.state = {
             signinContainer : "container",
             email: '',
             password : '',
             name : '',
             
             
        }
        
    };

    


    toggleOn() {
        this.setState({signinContainer : "container right-panel-active"})
        
    }
    toggleOff(){
        this.setState({signinContainer : "container "})

    }
    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password)
        .then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }
    signup(e){
       e.preventDefault();
       fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
       .then((u) => {
           console.log(u)
       }).catch((err) => {
           console.log(err)
       })
   }
    
      

    render() {
        
        
        
        
        return (
            <div>
            <div class={ this.state.signinContainer } id="container">
                <div class="form-container sign-up-container">
                    <form action="/" >
                        <h1>Create Account</h1>
                        <div className="social-container">

                        </div>
                        
                        <input type="text" placeholder="Full Name" name="name"  value={this.state.name} onChange={this.handleChange} />
                        <input type="email" placeholder="Email" name="email"  value={this.state.email} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange} />
                        <a href="/">Forgot your password?</a>
                        <button type="submit" onClick={this.signup} >Sign Up -</button>
                    </form>
                </div>
                <div class="form-container sign-in-container">
                    <form action="/" >
                        <h1>Sign in</h1>
                        <div class="social-container">
                            
                        </div>
                        
                        <input type="email" placeholder="Email" name="email"  value={this.state.email} onChange={this.handleChange} />
                        <input type="password" placeholder="Password" name="password"  value={this.state.password} onChange={this.handleChange} />
                        <a href="/">Forgot your password?</a>
                        <button onClick={this.login} >SIGN IN </button>
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
