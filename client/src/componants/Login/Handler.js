import React, { Component } from 'react';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import LoginAccount from './LoginAccount';



export default class Handler extends Component {
  constructor(props) {
    super(props);
    //this.authenticator = ;

    this.state = { 
      username: "",
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ 
      [event.target.id]: event.target.value
    });
  }

  fireBaseAuth() {
    //return signIn(this.state.username);
  }

  handleSubmit(event) {
    //authenticator.signIn
    event.preventDefault();
  }

render() {
    const style = require('./styleLogin.css');
    return (
      <div class = {style}>
        <div class="myNavbar">
          <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow-sm">
            <a class="navbar-brand" href="#home">Portfol.io</a>
          </nav>
        </div>
        <div id="home" class="container-fluid">
          <h3 id="title" class="text-left">Login</h3>
          <div id="form" class="container-fluid text-center"></div>
          <form id="myform" method="post" action="/profile">
            <ul>
              <li><label>Email</label></li>
              <li>
                <input
                  id="em"
                  type="text"
                  value={this.state.value}
                  onChange={this.handleChange}
                  placeholder="Enter Email"
                  name="email"
                  required
                ></input>
              </li>
              <li><label>Password</label></li>
              <li><input
                id="pass"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                placeholder="Enter Password"
                name="psw"
                required
              ></input>
              </li>
            </ul>

            <LoginAccount />
            <CreateAccount />
          </form>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>

      </div>
    </div>
    )};
}
