import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CreateAccount from './CreateAccount';

//import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { compose } from 'recompose';
import { Auth, Firestore, Storage } from 'react-firebase-context';





class Handler extends React.Component {
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


  handleSubmit(event) {
    //authenticator.signIn
    event.preventDefault();
  }
  onSubmit = event => {
    const { email, passw } = this.state;
    //this.props.history.push(ROUTES.PROFILE);
      this.props.firebase.auth().signInWithEmailAndPassword(email, passw).then(() => {
      //if (user) {
      //alert(firebase.auth().currentUser.email);
      //this.props.history.push(ROUTES.PROFILE);
      //document.location.href = "/profile";
      //}
      //else {
      alert("yay");
      // }
   })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        if (email === "" || passw === "") {
          alert("Fill in all required fields");
        }
        else if (errorCode === "auth/user-not-found" || errorCode === "auth/wrong-password") {
          alert("Incorrect user or password");
        }
        else {
          alert(errorMessage);

        }
      });
      alert("err");
    event.preventDefault();
    //document.getElementById("em").value = "";
    //document.getElementById("pass").value = "";*/

  }
  render() {
    const style = require('./styleLogin.css');
    return (
      <div class={style}>
        <div class="myNavbar">
          <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow-sm">
            <a class="navbar-brand" href="#home">Portfol.io</a>
          </nav>
        </div>
        <div id="home" class="container-fluid">
          <h3 id="title" class="text-left">Login</h3>
          <div id="form" class="container-fluid text-center"></div>
          <form id="myform" onSubmit={this.onSubmit}>
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
              <button href="createA" type="button" class="btn btn-light" onClick={this.onSubmit}>Login</button>
            <CreateAccount />
          </form>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
        </div>
      </div>
    )
  };
}



//const LoginPage = Handler;
export default Handler;
//export {Handler};