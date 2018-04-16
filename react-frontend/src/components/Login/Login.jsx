import React, { Component } from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

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
  Label,
  Col
} from 'reactstrap'

class Login extends Component {

  state = {
    username: "",
    password: ""
  }

  onSubmit = event => {
    event.preventDefault();
    console.error("Not implemented!!");
  }

  render() {
    return (
      <Container>
        <legend>Login</legend>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label>Username</Label>
            <Col sm={10}>
              <Input
                type="text"
                id="username"
                onChange={event => this.setState({username: event.target.value})}
              />
            </Col>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Col sm={10}>
              <Input
                type="password"
                id="password"
                onChange={(event)=> this.setState({password: event.target.value})}
              />
            </Col>
          </FormGroup>
          <Button type="submit">Login</Button>
          <p>Don't have an account?
            <Link to="/register">Register</Link>
          </p>
        </Form>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
