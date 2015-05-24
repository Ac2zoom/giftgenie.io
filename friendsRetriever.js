var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

var https = require('https');
 
var query = "";

var accessToken = "CAACEdEose0cBANa2AOJKUwj4KhZAt6xPWnYQa6zqbag3dNdcjRaHfSlcTtVVfH4nGD5ZCdRD55ic6ZBmMGHFK3tR3UZBEIi5By5VBBblTjL0XqYiHMUYSKjfEUh92spLeylcnX6pGWgEvyNeXc2WsdGsURpvcHUfoRMVfT8Iz1yOaaNVmC2th1ZA3WekC6DRhBrYWkI6TkQvbhdfaEfFU";  //TODO

var data;

// options for GET
var optionsget = {
    host : 'graph.facebook.com', // here only the domain name
    // (no http/https !)
    port : 443,
    path : '/me/friends?fields=name,id,likes&access_token=' + accessToken, // the rest of the url with parameters if needed
    method : 'GET' // do GET
};
 
// do the GET request
var reqGet = https.request(optionsget, function (res) {
    console.log("statusCode: ", res.statusCode);
    res.on('data', function (d) {
        console.info('GET result:\n');
        data += d;
        process.stdout.write(d);
        console.info('\n\nCall completed');
    });
});
 
data = JSON.parse(data);

reqGet.end();
reqGet.on('error', function (e) {
    console.error(e);
});

console.log(data[data][0][name]);