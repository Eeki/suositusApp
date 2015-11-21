Meteor.methods({
    'getDataFromUrl': function (extension) {
        var apiUrl = 'http://www.imdb.com/xml/find?json=1&nr=1&tt=on&q='
            + extension;
        var response = HTTP.get(apiUrl);
        return response;
    }
});