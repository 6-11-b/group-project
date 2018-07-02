import React from 'react';
import ReactDOM from 'react-dom';
import {Home, Owners, Tenants, Propertydatabase} from './screens';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();