import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';

          
class Login extends React.Component {
    render() {
    return (
        <div>
        <h1>Please Signup</h1>
            <div id="login">
            <input type="email" id="email" placeholder="Email"/>
            <input type="password" id="password" placeholder="Password"/>
            <button id="send">Send</button>
            </div>
        </div>                 
        )
    }
}

export default Login;