var express = require("express");
var cors = require("cors");

var app = express();
app.use(cors());

var https = require('https');
 
var query = "";

var accessToken = "CAACEdEose0cBAJCLpXgPJoypZCWdENSJYbvg9y6t9o8uKup6QST1ZAztHjebGgrNldGo0DuZBz3WHZC3vX2jqOEZB2HZCY6v7nJWW6ZBlzAJzN8ObF87aiwXGEoHwB6ZAPpZCNVfT63HAxRMZBUpZC5uPKCDzyM9E881DN2ZABBnI0nncaTuQAIgbh0ZATZAaTgeQl7h19XiqkI7b6U41o8XMNQiIq";  //TODO

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

//console.log(data[data][0][name]);