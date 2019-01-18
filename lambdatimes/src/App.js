import React, { Component } from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import authenticator from './components/authenticate/authenticator';

class App extends Component {
  constructor() {
    super();
    this.state = {
      logOutOpen: false
    }
  }

  toggleLogOut = _ => {
    if(localStorage.getItem('lt-username') !== null){
      this.setState({
        logOutOpen: !this.state.logOutOpen
      });
    }
  }

  logOut = _ => {
    localStorage.removeItem('lt-username');
  }

  render(){
    return (
      <div className="App">
        <TopBar toggleLogOut={this.toggleLogOut} logOutOpen={this.state.logOutOpen} logOut={this.logOut} />
        <Header />
        <ConditionalView />
      </div>
    );
  }
}

const ConditionalView = authenticator(Login)(Content);

export default App;
