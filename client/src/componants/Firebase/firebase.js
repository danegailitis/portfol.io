import app from 'firebase/app';
import 'firebase/auth'
var config = {
  apiKey: "AIzaSyDGubZDh62pQ3I0_7RDlvcCMick4I9zMwM",
  authDomain: "portfolio-280dd.firebaseapp.com",
  databaseURL: "https://portfolio-280dd.firebaseio.com",
  projectId: "portfolio-280dd",
  storageBucket: "portfolio-280dd.appspot.com",
  messagingSenderId: "402005994401"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
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


export default Firebase;
