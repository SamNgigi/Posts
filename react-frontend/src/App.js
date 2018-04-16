import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

/*

We use react-router-dom a library that is used for in application
routing in react apps. Using it we can mount components of our
choice on urls of our choice

*/

import { Route, Switch, BrowserRouter, Redirect } from 'react-router-dom';

import { Provider, connect } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import { auth } from "./actions"
import postApp from "./reducers";

import Posts from './components/Posts';
import NotFound from './components/404/NotFound';
import Login from './components/Login/Login'

let store = createStore(postApp, applyMiddleware(thunk));

class RootContainerComponent extends Component {
  componentDidMount(){
    this.props.loadUser();
  }

  PrivateRoute = ({ component: ChildComponent, ...rest })=> {
    return <Route {...rest} render={props => {
      if (this.props.auth.isLoading){
        return <em>Loading ...</em>;
      } else if (!this.props.auth.isAuthenticated){
        return <Redirect to="/login"/>
      } else {
        return <ChildComponent {...props}/>
      }
    }}/>
  }

  render() {
    let { PrivateRoute } = this;
    return (
      <BrowserRouter>
        <Switch>
          <PrivateRoute exact path="/" component={Posts}/>
            {/* <Route exact path="/register" component={Re} /> */}
            <Route exact path="/login" component={Login} />
            <Route  component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return{
    auth: state.auth,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUser: () => {
      return dispatch(auth.loadUser())
    }
  }
}

let RootContainer = connect(mapStateToProps, mapDispatchToProps)(RootContainerComponent)

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RootContainer />
      </Provider>
    )
  }
}

// is this working?
// export default App;

/*
  In the above code, we move the contents under Provider to
  separate component named RootContainerComponent.

  The RootContainerComponent, as it's name suggest, is the root
  container of the application and os connected to redux store. It
  has a PrivateRoute method which changes the component to be rendered when a route matches depending on the authentication state of the application.

  If the user is not logged in, it redirects the page to /login.

  The RootContainer is then used inside App component and is placed inside Provider component.
*/
