import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Owners, Tenants, Propertydatabase } from './screens';
import Navbar from './components/Navbar';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const Index = ({ pathname }) => {
    switch(pathname) {
        case '/':
            return <Home />
        case '/owners':
            return <Owners />
        case '/tenants':
            return <Tenants />
        case 'propertydatabase':
            return <Propertydatabase />
        default: 
            return <Home />
    }
}

let pathname = window.location.pathname;

ReactDOM.render(
    <Index pathname={pathname} />,
    document.getElementById('root')
)

window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
}
)