
import React from 'react';
import Navbar from '../components/Navbar';


class Request extends React.Component {
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

    render() {
    return (
        <div>
            <Navbar title="Maintenance Request" />
            <h1>{this.state.response.message}</h1>
            <h1>Please fill out the following form to submit a request for maintenance for your rental property</h1>
            <form id="request" action="/api/request" method="POST">
                <input type="radio" name="user" value="tenant" />Tenant
                <input type="radio" name="user" value="owner" />Owner
                <br />
                <br />
                <label for='firstlastname'>Enter your First and Last name: </label>
                <input type="text" name="firstlastname" id="firstlast" placeholder="First and Last Name"/>
                <br />
                <label for='email'>Enter your email address: </label>
                <input type="email" name="email" id="email" placeholder="Email"/>
                <br />
                <label for='address'>Enter the address for your rental property: </label>
                <input type="text" name="address" id="address" placeholder="Address"/>
                <br />
                <label for='date'>Enter the date of request: </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <h2>Please list the problem or repair needed for your rental property</h2>
                <label for='maintenancerequest'>Maintenance Request </label>
                <input type="text" name="maintenancerequest" id="maintenance" placeholder="Maintenance Requested"/>
                
                <button type="submit">Submit Request</button>
            </form>
        </div>                 
        )
    }
}

export default Request;