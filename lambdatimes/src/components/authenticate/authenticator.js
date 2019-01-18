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
      this.setState({
        loggedIn: localStorage.getItem('lt-username') === null ? false : true
      })
    }

    render(){
      return this.state.loggedIn ? <Content /> : <Login />  
    }
  }

  export default authenticate;