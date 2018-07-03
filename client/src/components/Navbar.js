import React from 'react';
import { Component } from "react"

class Navbar extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <a href="/">Home</a>
                <a href="/Owners">Owners</a>
                <a href="/Tenants">Tenants</a>
                <a href="/Propertydatabase">Propertydatabase</a>
            </div>
        )
    }
};

export default Navbar;