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

var accessToken = "CAACEdEose0cBAAWAG6A8YxEdZAowmS1ERW8uejcWQOGUMkxRtEGvD0Dugr4u1E9iMiDwqGR9pzTWsV0ZCVsrhZBdYy8cDNhf8fzEGAYwIgNmZACQyOZCgAMl3ZChiZAHCZB8LzxnFVFncOXKWQ5Q0yDrrnFuZADmkElMgTt5ZArZCm0RJ2SpS6t1VyeY28TElZCXXJKc78I0T4uTS528MV1nWZBuA";  //TODO

facebook.getFbData(accessToken, '/me/friends?fields=name,id,picture', function(data){
    friends = data;
    process.stdout.write(data);
});

app.get('/friends', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(friends);
});

app.get('/app/', function(req, res){
    console.log(req.query.id);
    temp = {"id" : req};
   res.render("friends_categories.html", temp);
});

app.get('/', function(req, res){
    res.render("index.html");
});

app.listen(8080);