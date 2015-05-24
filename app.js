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

var accessToken = "CAACEdEose0cBANa2AOJKUwj4KhZAt6xPWnYQa6zqbag3dNdcjRaHfSlcTtVVfH4nGD5ZCdRD55ic6ZBmMGHFK3tR3UZBEIi5By5VBBblTjL0XqYiHMUYSKjfEUh92spLeylcnX6pGWgEvyNeXc2WsdGsURpvcHUfoRMVfT8Iz1yOaaNVmC2th1ZA3WekC6DRhBrYWkI6TkQvbhdfaEfFU";  //TODO

facebook.getFbData(accessToken, '/me/friends?fields=name,id,picture', function(data){
    friends = data;
});

app.listen(8080);