Meteor.methods({
    'getDataFromUrl': function (textInput) {
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';
        var response = HTTP.get(imdbUrl + textInput);
        var json = JSON.parse(response.content);

        var searchResults;
        if(json["title_popular"] == json.undefined) {
            searchResults = json["title_substring"];
        }
        else {
            searchResults = json["title_popular"];
        }

        var searchArray = new Array();
        for(var i = 0; i < searchResults.length; i++) {
            var imdbID = searchResults[i]["id"];

            if(!Items.findOne({imdbID: imdbID})) {
                var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbID + '&plot=short&r=json';
                var omdbResponse = HTTP.get(omdbUrl);
                var omdbContent = omdbResponse.content;
                var omdbJson = JSON.parse(omdbContent);
                console.log(Items.insert(omdbJson));
                Items.insert(omdbJson);
            }
            //this search array is here so you can find the titles
            //through the imdb search algorithm by referring back to these
            searchArray.push(imdbID);
        }

        return searchArray;
    }
});
