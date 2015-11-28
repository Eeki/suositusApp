Template.topbar.helpers({
    //this thing makes the user links visible only if you're logged in
    loggedIn: function() {
        if(Meteor.userId() != null) {
            return true;
        }
        else {
            return false;
        }
    }
});

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});