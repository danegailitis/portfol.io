const functions = require('firebase-functions');
var express = require("express");
var path = require("path");

var app = express();


app.get('/', (req, res) => {
    console.log('event triggered for homepage');
    var mypath = path.join(__dirname+'/../');
    res.sendFile(__dirname+'/index.html');
});

app.get('', function (req, res) {
    console.log('event triggered for homepage');
    var mypath = path.join(__dirname + '/../');
    res.sendFile(__dirname+'/index.html');
});



app.post('/', function(req, res) {
    var mypath = path.join(__dirname+'/../');
    res.sendFile('/index.html'); // Testing
});

 app.post('/profile',(req,res) => {
    console.log('event triggered for profile');
    res.sendFile(__dirname+'/public/personal.html');
 });

 app.post('/login',(req,res) => {
    console.log('event triggered for login');
    var mypath = path.join(__dirname+'../');
    const fullPath = path.join(mypath + '/public/login.html');
    res.sendFile(__dirname+'/public/login.html');
});

/* serves all the static files */
/*app.get(/^(.+)$/, function(req, res){ 
    console.log('static file request : ' + req.params);
    res.sendFile( __dirname + req.params[0]); 
});*/

/*var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log('Listening on ' + port);
});*/

exports.app = functions.https.onRequest(app);
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
