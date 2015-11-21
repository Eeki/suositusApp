Meteor.methods({
    'getDataFromUrl': function (extension) {
        var imdbUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q=';        
        var json = JSON.parse(HTTP.get(imdbUrl + extension).content);
        var res = [];
        for (var i = 0; i < json["title_popular"].length; i++) {
        	var imdbId = json["title_popular"][i]["id"];
        	var omdbUrl = 'http://www.omdbapi.com/?i=' + imdbId + '&plot=short&r=json';
        	res.push(JSON.parse(HTTP.get(omdbUrl).content));
        }
        return res;
    }
});