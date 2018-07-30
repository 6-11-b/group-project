import React from 'react';
import Navbar from '../components/Navbar';
          
class Signup extends React.Component {
    state = {
        response: ''
      };
    
      componentDidMount() {
        this.callApi()
          .then(res => this.setState({ response: res }))
          .catch(err => console.log(err));
      }
    
      callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();
    
        if (response.status !== 200) throw Error(body.message);
    
        return body;
      };

    render () {
    return (
    <div>
        <div>
        <Navbar title/>
        </div>
        <h1>{this.state.response.message}</h1>
        <h1>Sign Up</h1>
        <p style={{fontSize: 20}}>Please select if you are a property owner or tenant to create your account.</p>
        <form id="signup" action="/api/signup" method="POST">
            <input type="radio" name="user" value="tenant" />Tenant
            <input type="radio" name="user" value="owner" />Owner
            <br />
            <input type="text" name="firstName" id="fist" placeholder="First Name"/>
            <input type="text" name="lastName" id="last" placeholder="Last Name"/><br></br>
            <input name="email" placeholder="Email" />
            <input name="password" placeholder="Enter Password" />
            <button style={{backgroundColor: 'ligthgray'}} type="submit">Submit</button>
        </form>
    </div>
    )
}

}

export default Signup;