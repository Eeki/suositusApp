Template.searchtemplate.events ({
    'submit form': function(event) {
        event.preventDefault();
        var textInput = event.target.text.value;

        Meteor.call('getDataFromUrl', textInput,
        function(error, result) {
            if (error) {
                console.log(error);
            }
            else {
                var json = JSON.parse(result.content);
                Session.set('jsonResults', json["title_popular"]);
            }
        });

        event.target.text.value = "";
    }
});