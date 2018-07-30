
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
        <h1>Section 1. Rental Property Information</h1>
                <label for='date'>Today's Date </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
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
                <label for='date'>Expected Move-In Date </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
        <h1>Section 2. Applicant History</h1>
                <br />
                <label for='firstname'>Applicant's First name: </label>
                <input type="text" name="firstname" id="first" placeholder/>
                <br />
                <label for='lastname'>Applicant's Last name: </label>
                <input type="text" name="lastname" id="last" placeholder/>
                <br />
                <label for='dob'>Date of Birth </label>
                <input type="date" name="dob" id="dob" placeholder="DOB"/>
                <br />
                <label for='social'>Social Security Number: </label>
                <input type="number" name="social" id="social" placeholder/>
                <br />
                <label for='license'>Drivers License Number: </label>
                <input type="number" name="license" id="license" placeholder/>
                <br />
                <label for='phone'>Phone number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
                <label for='email'>Email address: </label>
                <input type="email" name="email" id="email" placeholder/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Co-Applicants (Including Spouse)</p>
                <label for='coapplicant'>Name of Co-Applicant: </label>
                <input type="text" name="coapplicant" id="coapplicant" placeholder/>
                <br />
                <label for='dob'>Date of Birth </label>
                <input type="date" name="dob" id="dob" placeholder/>
                <br />
                <label for='social'>Social Security Number: </label>
                <input type="number" name="social" id="social" placeholder/>
                <br />
                <label for='license'>Drivers License Number: </label>
                <input type="number" name="license" id="license" placeholder/>
                <br />
                <label for='phone'>Phone number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
                <label for='email'>Email address: </label>
                <input type="email" name="email" id="email" placeholder/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Applicant's Current Address </p>
                <label for='address'>Current Address: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='payment'>Monthly Payment $ </label>
                <input type="text" name="payment" id="payment" placeholder/>
                <br />
                <input type="radio" name="rent" value="rent" />Rent
                <input type="radio" name="own" value="own" />Own
                <br />
                <input type="radio" name="apartment" value="apartment" />Apartment
                <input type="radio" name="home" value="home" />Home
                <br />
                <label for='date'>Date: From - To </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='landlordname'>Current Landlord's Name </label>
                <input type="text" name="landlordname" id="landlordname" placeholder/>
                <br />
                <label for='phone'>Current LandLord's Phone Number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Applicant's Prior Address</p>
                <label for='address'>Prior Address: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='payment'>Monthly Payment $ </label>
                <input type="text" name="payment" id="payment" placeholder/>
                <br />
                <input type="radio" name="rent" value="rent" />Rent
                <input type="radio" name="own" value="own" />Own
                <br />
                <input type="radio" name="apartment" value="apartment" />Apartment
                <input type="radio" name="home" value="home" />Home
                <br />
                <label for='date'>Date: From - To </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='landlordname'>Current Landlord's Name </label>
                <input type="text" name="landlordname" id="landlordname" placeholder/>
                <br />
                <label for='phone'>Current LandLord's Phone Number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Proposed Occupants</p>
                <label for='firstlastname'>1. First and Last Name: </label>
                <input type="text" name="firstlastname" id="firstlast" placeholder/>
                <label for='dob'>Date of Birth </label>
                <input type="date" name="dob" id="dob" placeholder="DOB"/>
                <br />
                <label for='firstlastname'>2. First and Last Name: </label>
                <input type="text" name="firstlastname" id="firstlast" placeholder/>
                <label for='dob'>Date of Birth </label>
                <input type="date" name="dob" id="dob" placeholder="DOB"/>
                <br />
                <label for='firstlastname'>3. First and Last Name: </label>
                <input type="text" name="firstlastname" id="firstlast" placeholder/>
                <label for='dob'>Date of Birth </label>
                <input type="date" name="dob" id="dob" placeholder="DOB"/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Have you or any of the proposed occupants ever:</p>
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
            <p style={{fontSize: 20, fontWeight: "bold"}}>Pets</p>
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
        <h1>Section 3. Employment</h1>
            <p style={{fontSize: 20}}>>Current Employer:</p>
                <label for='employer'>Current Employer (if self-employed, name of buisness) </label>
                <input type="text" name="employername" id="employername" placeholder/>
                <br />
                <label for='supervisor'>Supervisor's Name </label>
                <input type="text" name="supervisor" id="supervisor" placeholder/>
                <br />
                <label for='phone'>Supervisor's Phone Number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
                <label for='address'>Employer Address: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='position'>Position: </label>
                <input type="text" name="position" id="position" placeholder/>
                <br />
                <label for='business'>Type of Business: </label>
                <input type="text" name="business" id="business" placeholder/>
                <br />
                <label for='income'>Monthly Income $ </label>
                <input type="number" name="income" id="income" placeholder/>
                <br />
                <label for='date'>Date: From - To </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='income'>Other Income $ </label>
                <input type="number" name="income" id="income" placeholder/>
                <br />
                <label for='source'>Source of Other Income: </label>
                <input type="text" name="source" id="source" placeholder/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Prior Employer:</p>
                <label for='employer'>Prior Employer (if self-employed, name of buisness) </label>
                <input type="text" name="employername" id="employername" placeholder/>
                <br />
                <label for='supervisor'>Supervisor's Name </label>
                <input type="text" name="supervisor" id="supervisor" placeholder/>
                <br />
                <label for='phone'>Supervisor's Phone Number: </label>
                <input type="number" name="phone" id="phone" placeholder/>
                <br />
                <label for='address'>Employer Address: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='position'>Position: </label>
                <input type="text" name="position" id="position" placeholder/>
                <br />
                <label for='business'>Type of Business: </label>
                <input type="text" name="business" id="business" placeholder/>
                <br />
                <label for='income'>Monthly Income $ </label>
                <input type="number" name="income" id="income" placeholder/>
                <br />
                <label for='date'>Date: From - To </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='income'>Other Income $ </label>
                <input type="number" name="income" id="income" placeholder/>
                <br />
        <h1>Section 4. Financial Information</h1>
        <p style={{fontSize: 20, fontWeight: "bold"}}>Applicant's Bank Information:</p>
                <label for='bank'>Bank Name and Address </label>
                <input type="text" name="bank" id="bank" placeholder/>
                <br />
                <label for='bankamount'>Checking Account Balance </label>
                <input type="number" name="bankamount" id="bankamount" placeholder="$"/>
                <br/>
                <label for='bankamount'>Savings Account Balance </label>
                <input type="number" name="bankamount" id="bankamount" placeholder="$"/>
                <br />
            <p style={{fontSize: 20, fontWeight: "bold"}}>Co-Applicant's Bank Information:</p>
                <label for='bank'>Bank Name and Address </label>
                <input type="text" name="bank" id="bank" placeholder/>
                <br />
                <label for='bankamount'>Checking Account Balance </label>
                <input type="number" name="bankamount" id="bankamount" placeholder="$"/>
                <br/>
                <label for='bankamount'>Savings Account Balance </label>
                <input type="number" name="bankamount" id="bankamount" placeholder="$"/>
                <br />

                <br />

                <button type="submit">Submit Application</button>
            </form>
        </div>                 
        )
    }
}

export default Rental;