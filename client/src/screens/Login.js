import React from 'react';
import Navbar from '../components/Navbar';


class Login extends React.Component {
    render() {
    return (
        <div>
            <div>
            <Navbar title/>
            </div>
            <h1>Login</h1>
            <p style={{fontSize: 20}}>Please select if you are a Property Owner or Tenant and login to your account</p>
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

