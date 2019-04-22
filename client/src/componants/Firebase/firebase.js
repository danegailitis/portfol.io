import * as firebase from 'firebase';
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
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  } 
  createUser(email, password) {
    this.auth.doCreateUserWithEmailAndPassword(email,password);
  }
  signIn(email, password) {
    this.auth.signInWithEmailAndPassword(email, password);
  }
  signOut(email, password) {
    this.auth.signOut(email, password);
  }
}
