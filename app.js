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

app.get('/app', function(req, res){
    var output;
    var htmlSource = fs.readFileSync("friend_page.html", "utf8");
    call_jsdom(htmlSource, function (window) {
        var $ = window.$;
        while (friends[paging][next] != undefined) {
            for(i = 0; i < friends[data].length; i++){
                var friend_div = $("<div class='person'>").attr("id", friends[data][i][id]);
                $("#friends").append(friend_div);
                var prof_img = $("<img>").attr("id", friends[data][i][id] + "_img");
                $("#" + friends[data][i][id]).append(prof_img);
                $("#" + friends[data][i][id] + "_img").attr("src", friends[data][i][picture][data][url]);
                var name_link = $("<a>").attr("id", friends[data][i][id] + "_link");
                $("#" + friends[data][i][id]).append(name_link);
                $("#" + friends[data][i][id] + "_link").attr("href", "https://www.facebook.com/" + friends[data][i][id]);
                $("#" + friends[data][i][id] + "_link").text(friends[data][i][name];
            }
        }

        var output = documentToSource(window.document));
    });
    res.render(output, facebook_info.json);
});

app.listen(8080);