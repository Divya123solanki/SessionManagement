//session set and get
var express = require('express');
var app = express();
var session = require('express-session');
app.use(session({secret: "My secret here"}));

app.get('/',function(req,res){
    req.session.username = "programming expereience";
    res.send("session are set");
});

app.get('/get-session',function(req,res){
   res.send("your session user name is: "+req.session.username);
});
app.listen(3000);