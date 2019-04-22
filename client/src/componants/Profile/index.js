import React from 'react';
import ReactDOM from 'react-dom';
import LineChart from '../Chart/index'
import NavBuild from '../NavBuild/index';

//import serviceWorker from './serviceWorker';

class Profile extends React.Component{
  constructor(props){
    super(props);
    this.state = {ticker: ""};

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.stockchart = new LineChart();
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

render(){
  //this.stockchart.initialize("aapl");
    return(
      < div >
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
      </div >
    )};
}


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