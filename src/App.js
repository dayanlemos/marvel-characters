import React, { Component } from 'react';
import Router from './Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App container">
          <Router />
      </div>
    );
  }
}

export default App;
