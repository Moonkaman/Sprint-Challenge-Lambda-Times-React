import React from 'react';
import styled from 'styled-components';

const LoginForm = styled.form`

`

const LoginInput = styled.input`
  outline: none;
  border: none;
  padding: 5px 0 5px 5px;
  font-size: 18px;
  width: 80%;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

const LoginButton = styled.button`
  width: 20%;
  background: #304FFE;
  outline: none;
  border: none;
  color: white;
  font-size: 18px;
  padding: 5px 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: #2979FF;
  }
`

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
      <LoginForm action="">
        <h1>Please enter a Username</h1>
        <LoginInput type="text" placeholder='Username...' value={this.state.usernameInput} onChange={this.handleInput} />
        <LoginButton onClick={this.logIn}>Log In</LoginButton>
      </LoginForm>
    )
  }
}

export default Login;
