import React from 'react';
import ReactDOM from 'react-dom';
import LineChart from '../Chart/LineChart';
import { NavBuild } from './NavBuild';


//import serviceWorker from './serviceWorker';

const Profile = () => (
  <div>
    <NavBuild />
    <div id="home" class="container-fluid">
      <h1 id="profile" class="text-center">Profile</h1>
      <div>
      <LineChart />
      </div>
      <h3 id="uname" class="text-center">Welcome!</h3>
      <div id="status">
      </div>

      <div id="bio"></div>

    </div>
  </div>
);

export default Profile;

/*function displayUser()
{
    var user = firebase.auth().currentUser.email;
    if (!user)
    {
      user = "Nobody Signed in";
    }
    document.getElementById("uname").value = "Welcome"+user;
}*/