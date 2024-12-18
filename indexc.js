// set the cookie
var express = require('express');
var app = express();

var cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',function(req,res){
    console.log('Cookies',req.cookies);
    res.cookie('name','programming Experience').send('cookie set');
});
app.listen(3001);