import React from 'react';
import Navbar from '../components/Navbar';

const Home = () => 
    <div>
    <div>
        <Navbar title />
    </div>

    <div class="col-9">
        <h1 class="welcome-h1">Welcome to Property Management</h1>
        <p style={{fontSize: 20}}>Whether you are looking to list your rental property or find a property to rent, you have come to the right place.</p>

        <p style={{fontSize: 20}}> We offer Quality, Trusted, Prompt services to our Property Owners and Tenants. </p>


    </div>

    <div class="col-3 menu">
    <ul>
        <li><a href= './Signup'>Create a New Account</a></li>
        <li><a href='./Login'>Login to Your Account</a></li>
        <li><a href='./Propertydatabase'>Check Available Properties</a></li>
    </ul>

            </div>
        </div>

export default Home;