import React from 'react';
import Navbar from '../components/Navbar';

class Propertydatabase extends React.Component {
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
            .then( res => this.mapArray(res.property)
                .then( console.log(res) ) 
            )
            .then( console.log("Loaded") )
            .catch( err => console.log(err) )
    }
    
    callApi = async () => {
        const response = await fetch('/api/property');
        const body = await response.json();
    
        if (response.status !== 200) throw Error("error");
    
        return body;
    };

    mapArray(array) {
        let localString = [];
        for(let i = 0; i < array.length; i++) {
            localString[i] =
                <div>
                    <div>
                        <p>Address: {array[i].address} {array[i].city}, {array[i].state}</p>
                        <p>Description: A {array[i].area} sq. ft. {array[i].type} with {array[i].bedrooms.toString()} bedrooms and {array[i].bathrooms.toString()} bathrooms.</p>
                        <p>Rent: ${array[i].rent.toString()}</p>
                    </div>
                    <br />
                </div>
            ;
        }
        this.setState({ string: localString });
        console.log(localString);
    };

    render() {
        return (
            <div>
                <Navbar title="Property Database" />
                {this.state.string[0]}
                {this.state.string[1]}
                {this.state.string[2]}
                {this.state.string[3]}
                {this.state.string[4]}
                {this.state.string[5]}
                {this.state.string[6]}
                {this.state.string[7]}
            </div>
        )
    }
}

export default Propertydatabase;
