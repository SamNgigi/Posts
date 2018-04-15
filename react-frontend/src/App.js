import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/*

We use react-router-dom a library that is used for in application
routing in react apps. Using it we can mount components of our
choice on urls of our choice

*/

import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import postApp from "./reducers";

import Posts from './components/Posts';
import NotFound from './components/404/NotFound';

let store = createStore(postApp);




class App extends Component {
  render() {
    return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
    );
  }
}

export default App;
