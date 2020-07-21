import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyA4DcPQ7139Om-sySR5qb7AAegpgsbxEYg",
    authDomain: "react-auth-template.firebaseapp.com",
    databaseURL: "https://react-auth-template.firebaseio.com",
    projectId: "react-auth-template",
    storageBucket: "react-auth-template.appspot.com",
    messagingSenderId: "262978138846",
    appId: "1:262978138846:web:decd787c38c7636cc0c84f",
    measurementId: "G-Z5ZKZLF7XF"
  };

const fire = firebase.initializeApp(firebaseConfig)  
export default fire


