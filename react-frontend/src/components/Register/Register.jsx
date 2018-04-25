import React, {Component} from "react";
import {connect} from "react-redux";

import {Link, Redirect} from "react-router-dom";

import {auth} from "../../actions"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  Button,
  FormGroup,
  Form,
  Input,
  Container,
  Label
} from 'reactstrap'

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  onSubmit = event => {
    event.preventDefault();
    this.props.register(this.state.username, this.state.password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/"/>
    }
    return (<Container>
      <Form onSubmit={this.onSubmit}>
        <fieldset>
          <legend>Register</legend>
          {
            this.props.errors.length > 0 && (<ul>
              {this.props.errors.map(error => (<li key={error.field}>{error.message}</li>))}
            </ul>)
          }
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" onChange={event => this.setState({username: event.target.value})}/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input type="password" id="password" onChange={(event) => this.setState({password: event.target.value})}/>
          </FormGroup>
          <Button type="submit">Register</Button>
          <p className="mt-2">Do you have an account?
            <Link to="/login">Login</Link>
          </p>
        </fieldset>
      </Form>
    </Container>)
  }
}

const mapStateToProps = state => {
  let errors = []
  if (state.auth.errors) {
    errors = Object.keys(state.auth.errors).map(field => {
      return {field, message: state.auth.errors[field]};
    });
  }
  return {errors, isAuthenticated: state.auth.isAuthenticated};
}

const mapDispatchToProps = dispatch => {
  return {
    register: (username, password) => dispatch(auth.register(username, password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
