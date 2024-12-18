//counter how many times user visit on the website
var express = require('express');
var app = express();
var session = require('express-session');
app.use(session({secret: "My secret here"}));

app.get('/',function(req,res){
   if(req.session.user_visit){
    req.session.user_visit++;
    res.send("you are visited this page"+req.session.user_visit+"times.");
   }
   else{
    req.session.user_visit = 1;
    res.send("Hii, you are visit this page first time!..");
   }
});



app.listen(3001);