
import React from 'react';
import Navbar from '../components/Navbar';


class Checklist extends React.Component {
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
            <Navbar title/>
            <h1>{this.state.response.message}</h1>
            <h1>Move-In and Move-Out Walkthrough Checklist</h1>
            <p style={{fontSize: 20, fontWeight: "bold"}}>Please complete the checklist during your walkthrough. Select if you are moving in or moving out of a rental property. </p>
            <form id="checklist" action="/api/checklist" method="POST">
                <input type="radio" name="move" value="movein" />Move-In
                <input type="radio" name="move" value="moveout" />Move-Out
                <br />
                <br />
                <label for='firstlastname'>First and Last name: </label>
                <input type="text" name="firstlastname" id="firstlast" placeholder/>
                <br />
                <label for='email'>Email address: </label>
                <input type="email" name="email" id="email" placeholder/>
                <br />
                <label for='address'>Address for your rental property: </label>
                <input type="text" name="address" id="address" placeholder/>
                <br />
                <label for='date'>Current Date </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <p style={{fontSize: 20, fontWeight: "bold"}}>Rental Property Conditions:</p>
                <label for='date'>Date of Move-In Walkthrough </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='repname'>Name of representative with you during the Move-In walkthrough</label>
                <input type="text" name="repname" id="repname" placeholder="First and Last Name"/>
                <br />
                <label for='date'>Date of Move-Out Walkthrough </label>
                <input type="date" name="date" id="date" placeholder="Date"/>
                <br />
                <label for='repname'>Name of representative with you during the Move-Out walkthrough</label>
                <input type="text" name="repname" id="repname" placeholder="First and Last Name"/>
                <br />
            <h3>Living Room Conditions:</h3>
                <label for='floors'>Floors</label>
                <input type="radio" name="floors" value="Excellent" />Excellent
                <input type="radio" name="floors" value="Good" />Good
                <input type="radio" name="floors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='walls'>Walls</label>
                <input type="radio" name="walls" value="Excellent" />Excellent
                <input type="radio" name="walls" value="Good" />Good
                <input type="radio" name="walls" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='ceilings'>Celings</label>
                <input type="radio" name="ceilings" value="Excellent" />Excellent
                <input type="radio" name="ceilings" value="Good" />Good
                <input type="radio" name="ceilings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='doors'>Doors</label>
                <input type="radio" name="doors" value="Excellent" />Excellent
                <input type="radio" name="doors" value="Good" />Good
                <input type="radio" name="doors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='windows'>Windows</label>
                <input type="radio" name="windowss" value="Excellent" />Excellent
                <input type="radio" name="windows" value="Good" />Good
                <input type="radio" name="windows" value="Poor" />Poor 
                <br />
                <label for='coverings'>Window Coverings</label>
                <input type="radio" name="coverings" value="Excellent" />Excellent
                <input type="radio" name="coverings" value="Good" />Good
                <input type="radio" name="coverings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='closets'>Closets</label>
                <input type="radio" name="closets" value="Excellent" />Excellent
                <input type="radio" name="closets" value="Good" />Good
                <input type="radio" name="closets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='electrical'>Electrical Features</label>
                <input type="radio" name="electrical" value="Excellent" />Excellent
                <input type="radio" name="electrical" value="Good" />Good
                <input type="radio" name="electrical" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
            <h3>Kitchen Conditions:</h3>
                <label for='floors'>Floors</label>
                <input type="radio" name="floors" value="Excellent" />Excellent
                <input type="radio" name="floors" value="Good" />Good
                <input type="radio" name="floors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='walls'>Walls</label>
                <input type="radio" name="walls" value="Excellent" />Excellent
                <input type="radio" name="walls" value="Good" />Good
                <input type="radio" name="walls" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='ceilings'>Celings</label>
                <input type="radio" name="ceilings" value="Excellent" />Excellent
                <input type="radio" name="ceilings" value="Good" />Good
                <input type="radio" name="ceilings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='doors'>Doors</label>
                <input type="radio" name="doors" value="Excellent" />Excellent
                <input type="radio" name="doors" value="Good" />Good
                <input type="radio" name="doors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='windows'>Windows</label>
                <input type="radio" name="windowss" value="Excellent" />Excellent
                <input type="radio" name="windows" value="Good" />Good
                <input type="radio" name="windows" value="Poor" />Poor 
                <br />
                <label for='coverings'>Window Coverings</label>
                <input type="radio" name="coverings" value="Excellent" />Excellent
                <input type="radio" name="coverings" value="Good" />Good
                <input type="radio" name="coverings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='closets'>Closets/Pantry</label>
                <input type="radio" name="closets" value="Excellent" />Excellent
                <input type="radio" name="closets" value="Good" />Good
                <input type="radio" name="closets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='electrical'>Electrical Features</label>
                <input type="radio" name="electrical" value="Excellent" />Excellent
                <input type="radio" name="electrical" value="Good" />Good
                <input type="radio" name="electrical" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='cabinets'>Cabinets</label>
                <input type="radio" name="Cabinets" value="Excellent" />Excellent
                <input type="radio" name="Cabinets" value="Good" />Good
                <input type="radio" name="Cabinets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='drawers'>Drawers</label>
                <input type="radio" name="drawers" value="Excellent" />Excellent
                <input type="radio" name="drawers" value="Good" />Good
                <input type="radio" name="drawers" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='counters'>Counters</label>
                <input type="radio" name="counters" value="Excellent" />Excellent
                <input type="radio" name="counters" value="Good" />Good
                <input type="radio" name="counters" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='sink'>Sink/Faucet</label>
                <input type="radio" name="sink" value="Excellent" />Excellent
                <input type="radio" name="sink" value="Good" />Good
                <input type="radio" name="sink" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='fridge'>Refridgerator</label>
                <input type="radio" name="fridge" value="Excellent" />Excellent
                <input type="radio" name="fridge" value="Good" />Good
                <input type="radio" name="fridge" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='Stove'>Stove</label>
                <input type="radio" name="stove" value="Excellent" />Excellent
                <input type="radio" name="stove" value="Good" />Good
                <input type="radio" name="stove" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='oven'>Oven</label>
                <input type="radio" name="oven" value="Excellent" />Excellent
                <input type="radio" name="oven" value="Good" />Good
                <input type="radio" name="oven" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='dishwasher'>Dishwasher</label>
                <input type="radio" name="dishwasher" value="Excellent" />Excellent
                <input type="radio" name="dishwasher" value="Good" />Good
                <input type="radio" name="dishwasher" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='microwave'>Microwave</label>
                <input type="radio" name="microwave" value="Excellent" />Excellent
                <input type="radio" name="microwave" value="Good" />Good
                <input type="radio" name="microwave" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
            <h3>Bathroom Conditions:</h3>
                <label for='floors'>Floors</label>
                <input type="radio" name="floors" value="Excellent" />Excellent
                <input type="radio" name="floors" value="Good" />Good
                <input type="radio" name="floors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='walls'>Walls</label>
                <input type="radio" name="walls" value="Excellent" />Excellent
                <input type="radio" name="walls" value="Good" />Good
                <input type="radio" name="walls" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='ceilings'>Celings</label>
                <input type="radio" name="ceilings" value="Excellent" />Excellent
                <input type="radio" name="ceilings" value="Good" />Good
                <input type="radio" name="ceilings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='doors'>Doors</label>
                <input type="radio" name="doors" value="Excellent" />Excellent
                <input type="radio" name="doors" value="Good" />Good
                <input type="radio" name="doors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='windows'>Windows</label>
                <input type="radio" name="windowss" value="Excellent" />Excellent
                <input type="radio" name="windows" value="Good" />Good
                <input type="radio" name="windows" value="Poor" />Poor 
                <br />
                <label for='coverings'>Window Coverings</label>
                <input type="radio" name="coverings" value="Excellent" />Excellent
                <input type="radio" name="coverings" value="Good" />Good
                <input type="radio" name="coverings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='closets'>Closets</label>
                <input type="radio" name="closets" value="Excellent" />Excellent
                <input type="radio" name="closets" value="Good" />Good
                <input type="radio" name="closets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='electrical'>Electrical Features</label>
                <input type="radio" name="electrical" value="Excellent" />Excellent
                <input type="radio" name="electrical" value="Good" />Good
                <input type="radio" name="electrical" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='cabinets'>Cabinets</label>
                <input type="radio" name="Cabinets" value="Excellent" />Excellent
                <input type="radio" name="Cabinets" value="Good" />Good
                <input type="radio" name="Cabinets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='drawers'>Drawers</label>
                <input type="radio" name="drawers" value="Excellent" />Excellent
                <input type="radio" name="drawers" value="Good" />Good
                <input type="radio" name="drawers" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='counters'>Counters</label>
                <input type="radio" name="counters" value="Excellent" />Excellent
                <input type="radio" name="counters" value="Good" />Good
                <input type="radio" name="counters" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='sink'>Sink/Faucet</label>
                <input type="radio" name="sink" value="Excellent" />Excellent
                <input type="radio" name="sink" value="Good" />Good
                <input type="radio" name="sink" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='shower'>Shower</label>
                <input type="radio" name="shower" value="Excellent" />Excellent
                <input type="radio" name="shower" value="Good" />Good
                <input type="radio" name="shower" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='bath'>Bathtub</label>
                <input type="radio" name="bath" value="Excellent" />Excellent
                <input type="radio" name="bath" value="Good" />Good
                <input type="radio" name="bath" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='shelves'>Shelves</label>
                <input type="radio" name="shelves" value="Excellent" />Excellent
                <input type="radio" name="shelves" value="Good" />Good
                <input type="radio" name="shelves" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='mirrors'>Mirrors</label>
                <input type="radio" name="mirrors" value="Excellent" />Excellent
                <input type="radio" name="mirrors" value="Good" />Good
                <input type="radio" name="mirrors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
            <h3>Bedroom Conditions:</h3>
                <label for='floors'>Floors</label>
                <input type="radio" name="floors" value="Excellent" />Excellent
                <input type="radio" name="floors" value="Good" />Good
                <input type="radio" name="floors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='walls'>Walls</label>
                <input type="radio" name="walls" value="Excellent" />Excellent
                <input type="radio" name="walls" value="Good" />Good
                <input type="radio" name="walls" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='ceilings'>Celings</label>
                <input type="radio" name="ceilings" value="Excellent" />Excellent
                <input type="radio" name="ceilings" value="Good" />Good
                <input type="radio" name="ceilings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='doors'>Doors</label>
                <input type="radio" name="doors" value="Excellent" />Excellent
                <input type="radio" name="doors" value="Good" />Good
                <input type="radio" name="doors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='windows'>Windows</label>
                <input type="radio" name="windowss" value="Excellent" />Excellent
                <input type="radio" name="windows" value="Good" />Good
                <input type="radio" name="windows" value="Poor" />Poor 
                <br />
                <label for='coverings'>Window Coverings</label>
                <input type="radio" name="coverings" value="Excellent" />Excellent
                <input type="radio" name="coverings" value="Good" />Good
                <input type="radio" name="coverings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='closets'>Closets/Pantry</label>
                <input type="radio" name="closets" value="Excellent" />Excellent
                <input type="radio" name="closets" value="Good" />Good
                <input type="radio" name="closets" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='electrical'>Electrical Features</label>
                <input type="radio" name="electrical" value="Excellent" />Excellent
                <input type="radio" name="electrical" value="Good" />Good
                <input type="radio" name="electrical" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
            <h3>Garage Conditions:</h3>
                <label for='floors'>Floors</label>
                <input type="radio" name="floors" value="Excellent" />Excellent
                <input type="radio" name="floors" value="Good" />Good
                <input type="radio" name="floors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='walls'>Walls</label>
                <input type="radio" name="walls" value="Excellent" />Excellent
                <input type="radio" name="walls" value="Good" />Good
                <input type="radio" name="walls" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='ceilings'>Celings</label>
                <input type="radio" name="ceilings" value="Excellent" />Excellent
                <input type="radio" name="ceilings" value="Good" />Good
                <input type="radio" name="ceilings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='doors'>Doors</label>
                <input type="radio" name="doors" value="Excellent" />Excellent
                <input type="radio" name="doors" value="Good" />Good
                <input type="radio" name="doors" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='windows'>Windows</label>
                <input type="radio" name="windowss" value="Excellent" />Excellent
                <input type="radio" name="windows" value="Good" />Good
                <input type="radio" name="windows" value="Poor" />Poor 
                <br />
                <label for='coverings'>Window Coverings</label>
                <input type="radio" name="coverings" value="Excellent" />Excellent
                <input type="radio" name="coverings" value="Good" />Good
                <input type="radio" name="coverings" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='shelves'>Shelves</label>
                <input type="radio" name="shelves" value="Excellent" />Excellent
                <input type="radio" name="shelves" value="Good" />Good
                <input type="radio" name="shelves" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='garage'>Garage Door</label>
                <input type="radio" name="garage" value="Excellent" />Excellent
                <input type="radio" name="garage" value="Good" />Good
                <input type="radio" name="garage" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                <label for='electrical'>Electrical Features</label>
                <input type="radio" name="electrical" value="Excellent" />Excellent
                <input type="radio" name="electrical" value="Good" />Good
                <input type="radio" name="electrical" value="Poor" />Poor 
                <br />
                <label for='explain'>Please note any conditions here:</label>
                <input type="text" name="explain" id="explain" placeholder/>
                <br />
                
              
                <button type="submit">Submit Checklist</button>
            </form>
        </div>                 
        )
    }
}

export default Checklist;