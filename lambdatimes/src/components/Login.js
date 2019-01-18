import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameInput: ''
    }
  }

  handleInput = e => {
    this.setState({
      usernameInput: e.target.value
    })
  }

  logIn = _ => {
    localStorage.setItem('lt-username', this.state.usernameInput);
  }

  render(){
    return (
      <form action="">
        <h1>Please enter a Username</h1>
        <input type="text" placeholder='Username...' value={this.state.usernameInput} onChange={this.handleInput} />
        <button onClick={this.logIn}>Log In</button>
      </form>
    )
  }
}

export default Login;
