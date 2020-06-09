import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Users from './components/Users';
import './App.css';

import AddUser from './components/AddUser';

class App extends Component {

render() {

  return (
   
    <div className="container">
      <Navbar title="User APP" />
      <hr />
      <AddUser />
      <Users />   
    </div>
  )
}
}

export default App;
