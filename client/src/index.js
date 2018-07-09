import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Owners, Tenants, Propertydatabase, Signup, Login } from './screens';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = () => (
    <Router>
        <div>
            <Route exact path='/' component={Home} />
            <Route path='/owners' component={Owners} />
            <Route path='/tenants' component={Tenants} />
            <Route path='/propertydatabase' component={Propertydatabase} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
        </div>
    </Router>
)

ReactDOM.render(
    <Index />,
    document.getElementById('root')
)