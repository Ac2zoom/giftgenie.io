var express = require("express"),
    app = express(),
    facebook = require('./facebook.js'),
    https = require('https'),
    swig = require('swig');

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

app.engine('html', swig.renderFile);
 
var query = "";

var friends = "";

var accessToken = "CAACEdEose0cBAAemwQCIR7Pcx6oynyzzz37kFMnfKnMe3zrCmmWiBWWGp8ENNG8aZCvZBgtx6lmS8jINTpgnxOyZCa9iQM0SHOygokWhYfu9gri8AGcdVdzQNbZBHpO4UBj72bjVqOBAZC2F3JZAwaXoKw3YME5V70HfcRp9R2DZBrwO8f2226wO6AK7rHtd8eaqTr1oikK8iMOTl9vfKOn";  //TODO

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
   res.render("friends_categories", temp);
});

app.get('/', function(req, res){
    res.render("index");
});

app.post('/access_token',function(request,response){
    accessToken = request.access_token;
});

app.listen(8080);