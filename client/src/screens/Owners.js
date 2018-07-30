
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
    <p style={{fontSize: 20}}>Please click on the links to review new tenant application requests, review current tenant maintenance requests, or 
    check on the status of your property rentals</p>
  </div>
  
  <div class="col-3 menu">
    <ul>
    <li><a href='./Rental'>Rental Applications</a></li>
    <li><a href='./Request'>Maintenance Requests</a></li>
    <li><a href='./Checklist'>Property Checklsit</a></li>
    <li>My Properties</li>
    </ul>
  </div>
  

  </div>
  </div>
          
export default Owners;
