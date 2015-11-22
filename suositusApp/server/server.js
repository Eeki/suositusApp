Meteor.methods({
    'getDataFromUrl': function (textInput) {
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';        
        var json = JSON.parse(HTTP.get(imdbUrl + textInput).content);
        for (var i = 0; i < json["title_popular"].length; i++) {
        	var imdbId = json["title_popular"][i]["id"];
        	var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json';
        	Items.insert((JSON.parse(HTTP.get(omdbUrl).content)));
        }


        return Items.find(textInput);
    },

    'searchItems': function (textInput) {
        return Items.find(textInput);
    }
});