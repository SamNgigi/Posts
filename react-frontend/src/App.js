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
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import postApp from "./reducers";

import Posts from './components/Posts';
import NotFound from './components/404/NotFound';
import Login from './components/Login/Login'

let store = createStore(postApp, applyMiddleware(thunk));




class App extends Component {
  render() {
    return (
    <Provider store={ store }>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Posts} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
    );
  }
}
// is this working?
export default App;
