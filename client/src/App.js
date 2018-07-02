import React, { Component } from 'react';
//import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
//needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import './App.css';
import Loginscreen from './Loginscreen'
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      loginPage:[],
      uploadScreen:[]
    }
  }
componentWillMount(){
  var loginPage =[];
  loginPage.push(<Loginscreen parentContext={this}/>);
  this.setState({
                  loginPage:loginPage
                    })
  }
  render() {
    return (
      <div className="App">
        {this.state.loginPage}
        {this.state.uploadScreen}
      </div>
    );
  }
}

const style = {
  margin: 15,
};

export default App;


if(response.data.code == 200){
  console.log("Login successfull");
  var uploadScreen=[];
  uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
  self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
  }


/*class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> }
        <h1 className="App-intro">
          Here is where the front-end of our app will live
        </h1>
      </div>
    );
  }
}

export default App; */
