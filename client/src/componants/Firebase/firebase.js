import * as firebase from 'firebase';
import app from 'firebase/app';
import 'firebase/auth';
require ('firebase/firestore');


var config = {
  apiKey: "AIzaSyDGubZDh62pQ3I0_7RDlvcCMick4I9zMwM",
  authDomain: "portfolio-280dd.firebaseapp.com",
  databaseURL: "https://portfolio-280dd.firebaseio.com",
  projectId: "portfolio-280dd",
  storageBucket: "portfolio-280dd.appspot.com",
  messagingSenderId: "402005994401"
};




export default class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.database();
  } 
  createUser(email, password) {
    return this.auth.doCreateUserWithEmailAndPassword(email,password);
  }
  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  


  signOut(email, password) {
    return this.auth.signOut(email, password);
  }
  user(uid){
   return this.db.ref(`users/${uid}`);
  }
  users (){
    return this.db.ref('users');
  }
}

