import React from 'react';

const authenticate = Login => Content =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      }
    }

    componentDidMount() {
      console.log('%cYou can log out by clicking your name in the top right and then clicking Log Out', 'background: #2979FF; color: white; font-weight: bold; font-size: 18px; padding: 10px; border-radius: 6px;')
      this.setState({
        loggedIn: localStorage.getItem('lt-username') === null ? false : true
      })
    }

    render(){
      return this.state.loggedIn ? <Content /> : <Login />  
    }
  }

  export default authenticate;