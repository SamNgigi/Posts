import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Todos</h1>
        </header>
        <p className="App-intro">
          A react front end app with django as the back end
        </p>
      </div>
    );
  }
}

export default App;
