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

var accessToken = "CAACEdEose0cBANUqARMIWZBNEfl2pB4MC51rtDNGxITdcEKoPpvtQaWMns88fxQkoy03SFozxDwDLnNljkGm0LUksJm5rxrEqjO93Nf4yyVn02938DJVBYrQygeaAxZCjKJQ2BtKZBBd61ZCeZAEHn8A291lOB6Qvh3fGu3gUcmbCvnPe6L6IKulaYm7pYRzMrGlbwa7lj3xHD77xN6AY";  //TODO

facebook.getFbData(accessToken, '/me/friends?fields=name,id,picture', function(data){
    friends = data;
    process.stdout.write(data);
});

app.get('/friends', function(req, res){
    res.header("Access-Control-Allow-Origin", "*");
    res.send(friends);
});

app.get('/app', function(req, res){
    console.log(req.query.id);
    temp = {"id" : req};
   res.render("friends_categories.html", temp);
});


app.listen(8080);