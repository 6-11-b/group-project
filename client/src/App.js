import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './screens/home'


class App extends Component {
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
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
