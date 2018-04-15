import React, { Component } from 'react';
/*

We use react-router-dom a library that is used for in application
routing in react apps. Using it we can mount components of our
choice on urls of our choice

*/
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Posts from './components/Posts';
import NotFound from './components/404/NotFound';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
