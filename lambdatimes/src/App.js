import React, { Component } from 'react';

import TopBar from './components/TopBar';
import Header from './components/Header';
import Content from './components/Content/Content';
import Login from './components/Login';
import authenticator from './components/authenticate/authenticator';

const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <ConditionalView />
    </div>
  );
}

const ConditionalView = authenticator(Login)(Content);

export default App;
