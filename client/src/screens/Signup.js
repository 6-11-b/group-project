import React from 'react';
import Navbar from '../components/Navbar';
import axios from 'axios';
      
          
class Signup extends React.Component {
    signup () {
        axios.post('/api/v1/users/signup', this.state).then(() => {
            alert('success')
          }).catch((err) => {
            console.log('error')
          })
        }

    setValue(e) {
        this.setState({[e.target.name]: e.target.value})
    }   

    render () {
    return (
    <div>
    <h1>Please Signup</h1>
        <div id="signup">
        <input type="text" id="fist" placeholder="First Name"/>
        <input type="text" id="last" placeholder="Last Name"/><br></br>
        <input name="email" placeholder="Email" onChange={(e) => this.setValue(e)} />
        <input name="password" placeholder="Enter Password" onChange={(e) => this.setValue(e)} />
        <button onClick={() => this.signup()}>Submit</button>
        </div>
    </div>
    )
}

}

export default Signup;