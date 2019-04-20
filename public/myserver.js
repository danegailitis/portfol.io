
var express = require("express");
 var app = express();

 /* serves main page */
 app.get("/", function(req, res) {
    res.sendFile('/Users/danegailitis/Projects/portfolio/public/index.html')
 });

  app.get("/profile",function(req,res){
      res.sendFile("/Users/danegailitis/Projects/portfolio/public/personal.html");
  });

  app.get("/login",function(req,res){
    res.sendFile("/Users/danegailitis/Projects/portfolio/public/login.html");
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