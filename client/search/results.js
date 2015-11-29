Template.results.helpers ({
    jsonResults: function() {
        var searchArray = Session.get('titleResults');
        var results = new Array();
        for(var i = 0; i < searchArray.length; i++) {
            //console.log(searchArray[i]);
            var foundItem = Items.findOne({imdbID: searchArray[i]});
            //console.log(Items.findOne({imdbID: searchArray[i]}));
            results.push(foundItem);
        }
        //console.log(Items.find().fetch());
        console.log(results);
        return results;
    }
});
