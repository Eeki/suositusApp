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
                Session.set('jsonResults', result);
            }
        });

        event.target.text.value = "";
    }
});