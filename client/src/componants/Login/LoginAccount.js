import React, { Component } from 'react';
import firebase from 'firebase';
import { Link, withRouter } from 'react-router-dom';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { BrowserRouter as Router, Route } from 'react-router-dom';


class LoginButton extends Component {
    constructor(props){
        super(props)
    }
    render() {
        const { onPress, children } = this.props;
        return (
            <button href="lb" type="button" class="btn btn-success" onClick={onPress}>
                {children}
            </button>
        );
    }
}

class LoginAccount extends Component {
    login() {
        var email = document.getElementById("em").value;
        var passw = document.getElementById("pass").value;

        firebase.auth().signInWithEmailAndPassword(email, passw).then(function (user) {
            document.location.href = "/profile";
        })
        .catch(function (error){
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
        document.getElementById("em").value = "";
        document.getElementById("pass").value = "";
    }

    render() {
        const style = require('./styleLogin.css');
        return (
            <div class={style}>
                <LoginButton onPress={this.login}>Login</LoginButton>
            </div>
        );
    }
}

export default LoginAccount;
