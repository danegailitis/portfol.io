import React, { Component } from 'react';
import Firebase from '../Firebase/firebase';
import { Link, withRouter } from 'react-router-dom';


//import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import { FirebaseContext } from '../Firebase';




class CreateButton extends Component {
    constructor(props) {
        super(props)

    }
    render() {
        const { onPress, children } = this.props;

        return (
            <button href="createA" type="button" class="btn btn-light" onClick={onPress}>
                {children}
            </button>
        );
    }
}

class CreateAccount extends Component {
    constructor(props){
        //props.history.push(ROUTES.PROFILE);
        super(props);
        this.props = props;
        this.createAccount = this.createAccount.bind(this);

        
    }
    createAccount() {
        var email = document.getElementById("em").value;
        var passw = document.getElementById("pass").value;
        this.fb.doCreateUserWithEmailAndPassword(email, passw).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            if (email === "" || passw === "") {
                alert("Fill in all required fields");
            }
            else if (errorCode === "auth/email-already-in-use") {
                alert("Email already in use");
            }
            else if (errorCode === "auth/invalid-email") {
                alert("Email invalid");
            }
            else {
                alert("Success");
                document.location.href = "/profile";
                //props.history.push(ROUTES.PROFILE);
            }
        });
        document.getElementById("em").value = "";
        document.getElementById("pass").value = "";
    }
    changePage(){

    }


    render() {
        const style = require('./styleLogin.css');
        return (
            <div class={style}>
                <CreateButton onPress={this.createAccount}>CreateAccount</CreateButton>
            </div>
        );
    }
}

export default CreateAccount;
