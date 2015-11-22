Template.searchtemplate.events ({
    'submit form': function(event) {
        event.preventDefault();
        var textInput = event.target.text.value;

        if (searchItems().count() === 0) {
            getDataFromUrl();
        } else {
            searchItems();
        }

        function searchItems() {
            Meteor.call('searchItems', textInput, setSessionResults);
        } 

        function getDataFromUrl() {
            Meteor.call('getDataFromUrl', textInput, setSessionResults);
        }

        function setSessionResults(err, res) {
            if (err) {
                console.log(error);
            } else {
                Session.set('jsonResults', result);
            }
        }

        event.target.text.value = "";
    }
});