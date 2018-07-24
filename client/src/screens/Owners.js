
import React from 'react';
import Navbar from '../components/Navbar';
//import ReactDOM from 'react-dom';


const Owners = () => 
    <div>
      <div>
        <Navbar title />
    </div>
    
  
  <div class="row">

  <div class="col-9">
    <h1 class="welcome-h1">Welcome Property Owners</h1>
    <p class="para1">Please click on the links to review new tenant application request, review current tenant maintenance request
    check on the status of your property rentals, or see other forms/requests</p>
  </div>
  
  <div class="col-3 menu">
    <ul>
      <li>Review New Tenant Application Requests</li>
      <li>Tenant Maintenance Requests</li>
      <li><a href='./Propertydatabase'>Check on My Properties</a></li>
      <li>Other Forms/Request</li>
    </ul>
  </div>
  

  </div>
  </div>
          
export default Owners;
