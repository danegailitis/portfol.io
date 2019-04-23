
var express = require("express");
var path = require("path");
 var app = express();
 //app.use(express.static(__dirname + '/public'));

 /* serves main page */
 app.get("/", function(req, res) {
     var mypath = path.join(__dirname+"/../");
   res.sendFile(__dirname+'/index.html');
 });

  app.post("/profile",function(req,res){
      var mypath = path.join(__dirname+"/../");
    res.sendFile(__dirname+"/personal.html");
  });

  app.get("/login",function(req,res){
    var mypath = path.join(__dirname+"/../");
    res.sendFile(__dirname+"/login.html");
});

 /* serves all the static files */
 app.get(/^(.+)$/, function(req, res){ 
     console.log('static file request : ' + req.params);
     res.sendFile( __dirname + req.params[0]); 
 });

 var port = process.env.PORT || 5000;
 app.listen(port, function() {
   console.log("Listening on " + port);
 });