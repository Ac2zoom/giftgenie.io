var express = require("express"),
    app = express(),
    cons = require("consolidate"),
    facebook = require('./facebook.js'),
    https = require('https');

app.engine('html', cons.swig);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
 
var query = "";

var friends = "";

var accessToken = "CAACEdEose0cBALyT9jdNo1Ijcpy4M0ZCZCy53jQ3zorSQStyRhpppEHWIxOKkn9ewVkAIA3x2Mm0xzcL3ZCqo1zzgAt6yPB2KsTiZBNpgo0yyHw8Guw9ZCgeJkHHYR62mExip78ZBFgChbl3AGFnoymmJQca30Yx9WMiudWYwcLPjWRmmQct9gGv4f308IpZAXqaZB18vba0KhF61f6bcruZA";  //TODO

facebook.getFbData(accessToken, '/me/friends?fields=name,id,picture', function(data){
    friends = data;
    process.stdout.write(data);
});

app.listen(8080);