var express = require("express");
var cors = require("cors");
var facebook = require('./facebook.js');

var app = express();
app.use(cors());

var https = require('https');
 
var query = "";

var accessToken = "CAACEdEose0cBANa2AOJKUwj4KhZAt6xPWnYQa6zqbag3dNdcjRaHfSlcTtVVfH4nGD5ZCdRD55ic6ZBmMGHFK3tR3UZBEIi5By5VBBblTjL0XqYiHMUYSKjfEUh92spLeylcnX6pGWgEvyNeXc2WsdGsURpvcHUfoRMVfT8Iz1yOaaNVmC2th1ZA3WekC6DRhBrYWkI6TkQvbhdfaEfFU";  //TODO

facebook.getFbData(accessToken, '/me/friends', function(data){
    console.log(data);
});