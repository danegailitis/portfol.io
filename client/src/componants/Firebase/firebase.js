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

/*export default class Firebase {
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
}*/
class Firebase {
  constructor() {
    firebase.initializeApp(config);

    this.auth = firebase.auth();
    this.db = firebase.database();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** User API ***

  user = uid => this.db.ref(`users/${uid}`);

  users = () => this.db.ref('users');
}

export default Firebase;