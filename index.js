var friends;

$.get("http://localhost:8080/friends", function(data, status){
        friends = JSON.parse(data);
    });
    
function loadFriends() {
    $.get("http://localhost:8080/friends", function(data, status){
        friends = JSON.parse(data);
    }).then(function(){
        for(i = 0; i < friends.data.length; i++){
            var friend_div = $("<div class='person'>").attr("id", friends.data[i].id);
            $(".friends").append(friend_div);
            var prof_img = $("<img>").attr("id", friends.data[i].id + "_img");
            $("#" + friends.data[i].id).append(prof_img);
            $("#" + friends.data[i].id + "_img").attr("src", friends.data[i].picture.data.url);
            var name_link = $("<a>").attr("id", friends.data[i].id + "_link");
            $("#" + friends.data[i].id).append(name_link);
            $("#" + friends.data[i].id + "_link").attr("href", "https://www.facebook.com/" + friends.data[i].id);
            $("#" + friends.data[i].id + "_link").text(friends.data[i].name);
        }
    $.get(friends.paging.next, function(data, status) {
            friends = JSON.parse(data);
        });
    });
}