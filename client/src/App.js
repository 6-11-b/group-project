import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, Owners, Tenants, Propertydatabase} from './screens/index';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: 'Blah'
    };
  };

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  };

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <Router>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Owners" component={Owners} />
              <Route exact path="/Propertydatabase" component={Propertydatabase} />
              <Route exact path="/Tenants" component={Tenants} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
