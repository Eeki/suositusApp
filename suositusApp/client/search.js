Template.searchtemplate.events ({
    'submit form': function(event) {
        event.preventDefault();

        // text.value tulee topbar / search templatesta
        var searchInput = event.target.text.value;
        Session.set('searchInput', searchInput);
        setApiDatatoDb(searchInput);
        event.target.text.value = "";
    }
});

function setApiDatatoDb(searchInput) {
    Meteor.call('setApiDatatoDb', searchInput);
}

