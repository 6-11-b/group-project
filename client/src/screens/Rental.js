
import React from 'react';
import Navbar from '../components/Navbar';


class Rental extends React.Component {
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
            <Navbar title="Tenant Rental Application" />
            <h1>{this.state.response.message}</h1>
            <h1>Please fill out the rental application for the property you are interested in renting</h1>
            <form id="rental" action="/api/rental" method="POST">
        <h2>Rental Property Information</h2>
                <label for='todaysDate'>Today's Date </label>
                <input type="date" name="todaysDate" id="todaysDate" placeholder="Today's Date"/>
                <br />
                <label for='address'>Property address: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='rent'>Rent Amount $ </label>
                <input type="number" name="rent" id="rent" placeholder/>
                <br />
                <label for='deposit'>Deposit Amount $ </label>
                <input type="number" name="deposit" id="deposit" placeholder/>
                <br />
                <label for='moveInDate'>Expected Move-In Date </label>
                <input type="date" name="moveInDate" id="moveInDate" placeholder="Move In Date"/>
                <br />
        <h2>Applicant History</h2>
                <br />
                <label for='firstname'>Applicant's First name: </label>
                <input type="text" name="firstname" id="first" placeholder/>
                <br />
                <label for='lastname'>Applicant's Last name: </label>
                <input type="text" name="lastname" id="last" placeholder/>
                <br />
                <label for='applicantdob'>Date of Birth </label>
                <input type="date" name="applicantdob" id="applicantdob" placeholder="DOB"/>
                <br />
                <label for='applicantsocial'>Social Security Number: </label>
                <input type="number" name="applicantsocial" id="applicantsocial" placeholder="SSN"/>
                <br />
                <label for='applicantlicense'>Drivers License Number: </label>
                <input type="number" name="applicantlicense" id="applicantlicense" placeholder/>
                <br />
                <label for='applicantphone'>Phone number: </label>
                <input type="number" name="applicantphone" id="applicantphone" placeholder="Phone"/>
                <br />
                <label for='applicantemail'>Email address: </label>
                <input type="email" name="applicantemail" id="applicantemail" placeholder="Email"/>
                <br />
            <h3>Co-Applicants (Including Spouse)</h3>
                <label for='coapplicant'>Name of Co-Applicant: </label>
                <input type="text" name="coapplicant" id="coapplicant" placeholder="Name" />
                <br />
                <label for='codob'>Date of Birth </label>
                <input type="date" name="codob" id="codob" placeholder="DOB"/>
                <br />
                <label for='cosocial'>Social Security Number: </label>
                <input type="number" name="cosocial" id="cosocial" placeholder="SSN"/>
                <br />
                <label for='colicense'>Drivers License Number: </label>
                <input type="number" name="colicense" id="colicense" placeholder/>
                <br />
                <label for='cophone'>Phone number: </label>
                <input type="number" name="cophone" id="cophone" placeholder="Phone"/>
                <br />
                <label for='coemail'>Email address: </label>
                <input type="email" name="coemail" id="coemail" placeholder="Email"/>
                <br />
            <h3>Applicant's Current Address </h3>
                <label for='currentaddress'>Current Address: </label>
                <input type="text" name="currentaddress" id="currentaddress" placeholder/>
                <br />
                <label for='currentpayment'>Monthly Payment $ </label>
                <input type="text" name="currentpayment" id="payment" placeholder/>
                <br />
                <input type="radio" name="currentowner" value="rent" />Rent
                <input type="radio" name="currentowner" value="own" />Own
                <br />
                <input type="radio" name="currenttype" value="apartment" />Apartment
                <input type="radio" name="currenttype" value="home" />Home
                <br />
                <label for='currentfromdate'>Date: From - To </label>
                <input type="date" name="currentfromdate" id="currentdate" placeholder="Date"/>
                <input type="date" name="currenttodate" id="currentdate" placeholder="Date"/>
                <br />
                <label for='currentlandlordname'>Current Landlord's Name </label>
                <input type="text" name="currentlandlordname" id="currentlandlordname" placeholder/>
                <br />
                <label for='currentphone'>Current LandLord's Phone Number: </label>
                <input type="number" name="currentphone" id="currentphone" placeholder/>
                <br />
            <h3>Applicant's Prior Address</h3>
                <label for='prioraddress'>Prior Address: </label>
                <input type="text" name="prioraddress" id="prioraddress" placeholder/>
                <br />
                <label for='priorpayment'>Monthly Payment $ </label>
                <input type="text" name="priorpayment" id="priorpayment" placeholder/>
                <br />
                <input type="radio" name="priorowner" value="rent" />Rent
                <input type="radio" name="priorowner" value="own" />Own
                <br />
                <input type="radio" name="priortype" value="apartment" />Apartment
                <input type="radio" name="priortype" value="home" />Home
                <br />
                <label for='priorfromdate'>Date: From - To </label>
                <input type="date" name="priorfromdate" id="priordate" placeholder="Date"/>
                <input type="date" name="priortodate" id="priordate" placeholder="Date"/>
                <br />
                <label for='priorlandlordname'>Current Landlord's Name </label>
                <input type="text" name="priorlandlordname" id="priorlandlordname" placeholder/>
                <br />
                <label for='priorphone'>Current LandLord's Phone Number: </label>
                <input type="number" name="priorphone" id="priorphone" placeholder/>
                <br />
        <h2>Proposed Occupants</h2>
                <label for='oc1firstlastname'>1. First and Last Name: </label>
                <input type="text" name="oc1firstlastname" id="oc1firstlast" placeholder/>
                <label for='oc1dob'>Date of Birth </label>
                <input type="date" name="oc1dob" id="oc1dob" placeholder="DOB"/>
                <br />
                <label for='oc2firstlastname'>2. First and Last Name: </label>
                <input type="text" name="oc2firstlastname" id="oc2firstlast" placeholder/>
                <label for='oc2dob'>Date of Birth </label>
                <input type="date" name="oc2dob" id="oc2dob" placeholder="DOB"/>
                <br />
                <label for='oc3firstlastname'>3. First and Last Name: </label>
                <input type="text" name="oc3firstlastname" id="oc3firstlast" placeholder/>
                <label for='oc3dob'>Date of Birth </label>
                <input type="date" name="oc3dob" id="oc3dob" placeholder="DOB"/>
                <br />
            <h3>Have you or any of the proposed occupants ever:</h3>
                <label for='felony'>Been convicted of a felony? </label>
                <input type="radio" name="felony" value="yes" />Yes
                <input type="radio" name="felony" value="no" />No
                <br />
                <label for='evicted'>Been evicted from a rental? </label>
                <input type="radio" name="evicted" value="yes" />Yes
                <input type="radio" name="evicted" value="no" />No
                <br />
                <label for='defaulted'>Defaulted on a lease? </label>
                <input type="radio" name="defaulted" value="yes" />Yes
                <input type="radio" name="defaulted" value="no" />No
                <br />
                <label for='smoke'>Does the applicant or any proposed occupants smoke? </label>
                <input type="radio" name="smoke" value="yes" />Yes
                <input type="radio" name="smoke" value="no" />No
            <h3>Pets</h3>
                <label for='pets'>Do you own any pets? </label>
                <input type="radio" name="pets" value="yes" />Yes
                <input type="radio" name="pets" value="no" />No
                <br />
                <label for='numberofpets'>If you own pets, how many? </label>
                <input type="number" name="numberofpets" id="numberofpets" placeholder/>
                <br />
                <label for='pettype'>If you own pets, what type of animal and breed (Ex. dog, cat, bird, etc)? </label>
                <input type="text" name="pettype" id="pettype" placeholder/>
                <br />
        <h2>Employment</h2>
            <h3>Current Employer:</h3>
                <label for='currentemployer'>Current Employer (if self-employed, name of buisness) </label>
                <input type="text" name="currentemployername" id="employername" placeholder/>
                <br />
                <label for='currentsupervisor'>Supervisor's Name </label>
                <input type="text" name="currentsupervisor" id="currentsupervisor" placeholder/>
                <br />
                <label for='currentemployerphone'>Supervisor's Phone Number: </label>
                <input type="number" name="currentemployerphone" id="currentemployerphone" placeholder/>
                <br />
                <label for='currentemployeraddress'>Employer Address: </label>
                <input type="text" name="currentemployeraddress" id="currentemployeraddress" placeholder/>
                <br />
                <label for='currentposition'>Position: </label>
                <input type="text" name="currentposition" id="currentposition" placeholder/>
                <br />
                <label for='currentbusiness'>Type of Business: </label>
                <input type="text" name="currentbusiness" id="currentbusiness" placeholder/>
                <br />
                <label for='currentincome'>Monthly Income $ </label>
                <input type="number" name="currentincome" id="currentincome" placeholder/>
                <br />
                <label for='currentemploymentdate'>Date: From - To </label>
                <input type="date" name="currentemploymentfromdate" id="currentemploymentfromdate" placeholder="Date"/>
                <input type="date" name="currentemploymenttodate" id="currentemploymenttodate" placeholder="Date"/>
                <br />
                <label for='currentincome'>Other Income $ </label>
                <input type="number" name="currentincome" id="currentincome" placeholder/>
                <br />
                <label for='currentsource'>Source of Other Income: </label>
                <input type="text" name="currentsource" id="currentsource" placeholder/>
                <br />
            <h3>Prior Employer:</h3>
                <label for='prioremployer'>Prior Employer (if self-employed, name of buisness) </label>
                <input type="text" name="prioremployername" id="prioremployername" placeholder/>
                <br />
                <label for='priorsupervisor'>Supervisor's Name </label>
                <input type="text" name="priorsupervisor" id="priorsupervisor" placeholder/>
                <br />
                <label for='prioremployerphone'>Supervisor's Phone Number: </label>
                <input type="number" name="prioremployerphone" id="prioremployerphone" placeholder/>
                <br />
                <label for='prioremployeraddress'>Employer Address: </label>
                <input type="text" name="prioremployeraddress" id="prioremployeraddress" placeholder/>
                <br />
                <label for='priorposition'>Position: </label>
                <input type="text" name="priorposition" id="priorposition" placeholder/>
                <br />
                <label for='priorbusiness'>Type of Business: </label>
                <input type="text" name="priorbusiness" id="priorbusiness" placeholder/>
                <br />
                <label for='priorincome'>Monthly Income $ </label>
                <input type="number" name="priorincome" id="priorincome" placeholder/>
                <br />
                <label for='prioremploymentdate'>Date: From - To </label>
                <input type="date" name="prioremploymentfromdate" id="prioremploymentfromdate" placeholder="Date"/>
                <input type="date" name="prioremploymenttodate" id="prioremploymenttodate" placeholder="Date"/>
                <br />
        <h2>Financial Information</h2>
            <h3>Applicant's Bank Information:</h3>
                <label for='bank'>Bank Name and Address </label>
                <input type="text" name="bank" id="bank" placeholder/>
                <br />
                <label for='checkingbankamount'>Checking Account Balance </label>
                <input type="number" name="checkingbankamount" id="checkingbankamount" placeholder="$"/>
                <br/>
                <label for='savingbankamount'>Savings Account Balance </label>
                <input type="number" name="savingbankamount" id="savingbankamount" placeholder="$"/>
                <br />
            <h3>Co-Applicant's Bank Information:</h3>
                <label for='cobank'>Bank Name and Address </label>
                <input type="text" name="cobank" id="cobank" placeholder/>
                <br />
                <label for='cocheckingbankamount'>Checking Account Balance </label>
                <input type="number" name="cocheckingbankamount" id="cocheckingbankamount" placeholder="$"/>
                <br/>
                <label for='cosavingbankamount'>Savings Account Balance </label>
                <input type="number" name="cosavingbankamount" id="cosavingbankamount" placeholder="$"/>
                <br />

                <br />

                <button type="submit">Submit Application</button>
            </form>
        </div>                 
        )
    }
}

export default Rental;
