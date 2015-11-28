Template.search.events ({
    'submit form': function(event) {
        event.preventDefault();
        var textInput = event.target.text.value;
        textInput = textInput.replace(' ', '+');
        Router.go('results');
        Meteor.call('getDataFromUrl', textInput, setSessionResults);

        event.target.text.value = "";
    }
});

function setSessionResults (error, result) {
    if (error) {
        console.log(error);
    }
    else {
        Session.set('jsonResults', result);
    }
}