import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { Home, Owners, Tenants, Propertydatabase } from "./screens";

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/":
      return <Home />;
    case "/":
      return <Owners />;
    case "/tenants":
      return <Tenants />;
    case "/propertydatabase":
      return <Propertydatabase />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<Index pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});

const route = (WrappedComponent, routes) => {
     return class extends React.Component {
    render() {
       const ComponentForPathname = routes[this.props.pathname];
       return (
         <WrappedComponent>
           <ComponentForPathname {...this.props} />
         </WrappedComponent>
       );
     }
   };
 };

 const Root = props =>
   <div>
     {props.children}
   </div>;

 const Routers = route(Root, {
   "/": Home,
   "/": Owners,
   "/tenants": Tenants,
   "/propertydatabase": Propertydatabase
 });

 let Pathname = window.location.pathname;

 render(<Routers pathname={pathname} />, document.getElementById("root"));

 window.addEventListener("popstate", () => {
   pathname = window.location.pathname;
 });

 const index = ({ store }) => (
   <Provider store={store}>
     <Router>
       <div>
         <Route path="/" component={Home} />
         <Route path="/" component={Owners} />
         <Route path="/tenants" component={Tenants} />
         <Route path="/propertydatabase" component={Propertydatabase} />
       </div>
     </Router>
   </Provider>
 );

 render(<Index />, document.getElementById('root'));
 
