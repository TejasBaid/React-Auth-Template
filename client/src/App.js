import React from 'react';
import { Signup } from './pages/signup/signup'
import './App.css';
import fire from './firebase/firebase.utils'

class App extends React.Component{
  constructor(props) {
    super(props)
  
    this.state = {
       user : {}
    }
  }
  componentDidMount(){
    this.authListener() 
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({user})
      }else{
        this.setState({user: null})
      }
    })
  }
  render() {
    return(
      <Signup />
    )
    }
  
}

export default App;
