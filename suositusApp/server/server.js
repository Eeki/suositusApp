Meteor.methods({
    'setApiDatatoDb': function (textInput) {
        //console.log('server.js/setApiDatatoDb run')
        // get array of search results by textInput from IMDB api 
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';
        var responseFromImdb = HTTP.get(imdbUrl + textInput);
        var contentFromImdb = responseFromImdb.content;
        var jsonFromImdb = JSON.parse(contentFromImdb);
        var itemsFromImdb = jsonFromImdb["title_popular"];

        // get more info from omdb for every item on array

        if (itemsFromImdb) {
            for (var i = 0; i < itemsFromImdb.length; i++) {
                var imdbId = itemsFromImdb[i]["id"];
                if (!Items.findOne({'imdbID': imdbId })) {
                    var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json';
                    var responseFromOmdb = HTTP.get(omdbUrl);
                    var contentFromOmdb = responseFromOmdb.content;
                    var jsonFromOmdb = JSON.parse(contentFromOmdb);
                    console.log('Inserted "' + jsonFromOmdb["Title"] + '" to database!');
                    Items.insert(jsonFromOmdb);
                }
            }

        } else {
            console.log('No data!');
        }
    }
});

//haku ei toimi

// 2 method 
// --------
// 1. search(searchInput) -> imdb[id, id,...] & insert to Items.db & Session.set()
// 2. results(imdb[id, id,...]) -> Items.find()