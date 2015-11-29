Template.search.events ({
    'submit form': function(event) {
        event.preventDefault();
        var textInput = event.target.text.value;
        textInput = textInput.replace(' ', '+');

        Meteor.call('getDataFromUrl', textInput, setSessionResults);

        event.target.text.value = "";

        Router.go('results');
    }
});

function setSessionResults (error, result) {
    if (error) {
        console.log(error);
    }
    else {
        Session.set('titleResults', result);
    }
}