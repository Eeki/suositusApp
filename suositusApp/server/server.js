Meteor.methods({
    'setApiDatatoDb': function (textInput) {
        console.log('server.js/setApiDatatoDb run')
        // get array of search results by textInput from IMDB api 
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';
        var responseFromImdb = HTTP.get(imdbUrl + textInput);
        var contentFromImdb = responseFromImdb.content;
        var jsonFromImdb = JSON.parse(contentFromImdb);
        var itemsFromImdb = jsonFromImdb["title_popular"];

        // get more info from omdb for every item on array
        for (var i = 0; i < itemsFromImdb.length; i++) {

        	var imdbId = itemsFromImdb[i]["id"];
        	var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json';

            //insert every search result from OMDB Items database
            var responseFromOmdb = HTTP.get(omdbUrl);
            var contentFromOmdb = responseFromOmdb.content;
            var jsonFromOmdb = JSON.parse(contentFromOmdb);
            if (!Items.findOne({ 'imdbID' : imdbId })) {
                console.log('insert' + i)
                Items.insert(jsonFromOmdb);
            }
        }
    }
});

