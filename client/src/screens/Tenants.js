import React from 'react';
import Navbar from '../components/Navbar';
//import ReactDOM from 'react-dom';

const Tenants = () => 
    <div>
    <div>
        <Navbar title />
    </div>

<div class="row">

<div class="col-9">
  <h1 class="welcome-h1">Welcome Tenants</h1>
  <p class="para1">Please click on the links to submit a rental application, send a maintenance request, view property rentals, or see other forms/requests</p>
</div>

<div class="col-3 menu">
  <ul>
    <li>Submit a Rental Application</li>
    <li><a href='./Request'>Submit a Maintenance Requests</a></li>
    <li>Check on Available Properties</li>
    <li>Other Forms/Request</li>
  </ul>
</div>


</div>
</div>
          

export default Tenants;