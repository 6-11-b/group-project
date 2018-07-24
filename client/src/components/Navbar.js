import React from 'react';
import { Component } from "react"



const Navbar = ({ title }) => (
    <div>
        <h1>{title}</h1>
        <a href="/">Home | </a>
        <a href="/owners">Owners | </a>
        <a href="/tenants">Tenants | </a>
        <a href="/propertydatabase">Property Database | </a>
        <a href="/signup">Signup | </a>
        <a href="/login">Login | </a>
        <a href="/request">Request | </a>
        <a href="/rental">Rental | </a>
        <a href="/checklist">Checklist</a>
    </div>
)

export default Navbar;