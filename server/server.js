Meteor.methods({
'getDataFromUrl': function (textInput) {
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';
        var response = HTTP.get(imdbUrl + textInput);
        var json = JSON.parse(response.content);

        var searchResults;
        if(json["title_popular"] == json.undefined) {
            searchResults = json["title_exact"];
        }
        else {
            searchResults = json["title_popular"];
        }

        var searchArray = new Array();
        for(var i = 0; i < searchResults.length; i++) {
            var title = searchResults[i]["title"];
            var plot = searchResults[i]["plot"];
            //var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json';
            //the index element can prolly just be deleted
            searchArray.push({title: title, index: i});
        }

        return searchArray;
    }
});

Meteor.methods({
    'insertLike': function(insertableData) {
        Likes.insert(insertableData);
    },

    'deleteLike': function(deletableData) {
        Likes.remove(deletableData);
    },

    'findOther': function(findableUsername) {
        var user = Meteor.users.find({username: findableUsername});
        return user;
    }
});

Meteor.publish('likes', function() {
    return Likes.find();
});

//TODO: maybe publish only the usernames
Meteor.publish('allUsers', function() {
   return Meteor.users.find({});
});