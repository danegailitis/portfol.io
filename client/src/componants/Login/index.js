import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { Firebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';



const LOGIN = () => (
  <div>
    <div class="myNavbar">
      <nav class="navbar navbar-expand-md bg-secondary navbar-dark sticky-top shadow-sm">
        <a class="navbar-brand" href="#home">Portfol.io</a>
      </nav>
    </div>
    <div id="home" class="container-fluid">
      <h3 id="title" class="text-left">Login</h3>
      <div id="form" class="container-fluid text-center"></div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,100 100,0 100,100" />
          </svg>
    </div>
  </div>
)
export default LOGIN;

class handleCreate{

}


class Login extends Component {
  constructor(props) {
    super(props);
    this.authenticator = new Firebase;
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
    return authenticator.signIn(this.state.username);
  }

  handleSubmit(event) {
    authenticator.signIn
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);

class Form extends Component {
  render (){

  }
  return(
    <form>
      <ul>{
      };
      </ul>
          <button href="lb" onclick="login();" type="button" class="btn btn-success">Login</button>
          <button href="createA" onclick="createAccount();" type="button" class="btn btn-light">Create Account</button>
        
      </form>
  )
/</ul>};

const listItems {
  <form onSubmit={this.handleSubmit}>
    <label>
      Email
    </label>
    <input id="em" type="text" placeholder="Enter Email" name="email" required></input>
  </form>
}
    <li><label for="email"><b>Email</b></label>}</li>

    <li><input id="em" type="text" placeholder="Enter Email" name="email" required></li>

    <li><label for="psw"><b>Password</b></label></li>

    <li><input id="pass" type="password" placeholder="Enter Password" name="psw" required></li>
}
        <form id="myform" method="post" action="/profile"></form>