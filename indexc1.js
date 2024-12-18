// set the cookie and delete the cookie
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){
    // res.cookie('name','Programming experience',{expire:10000+Date.now()});
    res.cookie('name','Programming experience',{maxAge:10000});
    res.send('Cookie set');
});

app.get('/clear',function(req,res){
    res.clearCookie('name');
    res.send('Cookie are cleared....');
})

app.listen(3001);