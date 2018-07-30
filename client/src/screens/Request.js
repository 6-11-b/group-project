
import React from 'react';
import Navbar from '../components/Navbar';


class Request extends React.Component {
    constructor() {
        super();
        this.state = {
            property: [],
            string: []
        };
        this.mapArray = this.mapArray.bind(this);
        this.callApi = this.callApi.bind(this);
    }
    
    componentDidMount() {
        this.callApi()
            .then( res => this.mapArray(res.maintenance)
                .then( console.log(res) ) 
            )
            .then( console.log("Loaded") )
            .catch( err => console.log(err) )
    }
    
    callApi = async () => {
        const response = await fetch('/api/request');
        const body = await response.json();
    
        if (response.status !== 200) throw Error("error");
    
        return body;
    };

    mapArray(array) {
        let localString =
            <form id="request" action="/api/request/edit" method="POST">
                <label for='firstlastname'>Enter your First and Last name: </label>
                <input type="text" name="firstlastname" id="firstlastname" value={array[0].name}/>
                <br />
                <label for='email'>Enter your email address: </label>
                <input type="email" name="email" id="email" value={array[0].email}/>
                <br />
                <label for='address'>Enter the address for your rental property: </label>
                <input type="text" name="address" id="address" value={array[0].address}/>
                <br />
                <label for='date'>Enter the date of request: </label>
                <input type="date" name="date" id="date" value={array[0].date}/>
                <br />
                <p style={{fontSize: 20, fontWeight: "bold"}}>Please list the problem or repair needed for your rental property</p>
                <label for='maintenancerequest'>Maintenance Request </label>
                <input type="text" name="maintenancerequest" id="maintenance" defaultValue={array[0].maintenancerequest}/>
                
                <button type="submit">Edit Request</button>
                <button type="submit" formaction="/api/request/delete">Delete Request</button>
            </form>
        ;
        this.setState({ string: localString });
        console.log(localString);
    };

    render() {
    return (
        <div>
            <Navbar title="Maintenance Request" />
            {this.state.string}
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
                <p style={{fontSize: 20, fontWeight: "bold"}}>Please list the problem or repair needed for your rental property</p>
                <label for='maintenancerequest'>Maintenance Request </label>
                <input type="text" name="maintenancerequest" id="maintenance" placeholder="Maintenance Requested"/>
                
                <button type="submit">Submit Request</button>
            </form>
        </div>                 
        )
    }
}

export default Request;
