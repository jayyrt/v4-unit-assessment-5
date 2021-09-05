import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Nav from './Components/Nav/Nav';
import routes from './routes';

class App extends Component {
 
  render() {
    return (
      <div>
        <Nav />
        {routes}
      </div>
    );
  }
}

export default App;