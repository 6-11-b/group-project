import React from 'react';
import Navbar from '../components/Navbar';
          
class Login extends React.Component {
    render() {
    return (
        <div>
            <Navbar title="Login" />
            <h1>Please Signup</h1>
            <form id="login" action="/api/login" method="POST">
                <input type="radio" name="user" value="tenant" />Tenant
                <input type="radio" name="user" value="owner" />Owner
                <br />
                <input type="email" name="email" id="email" placeholder="Email"/>
                <input type="password" name="password" id="password" placeholder="Password"/>
                <button type="submit">Send</button>
            </form>
        </div>                 
        )
    }
}

export default Login;