Router.configure({
    layoutTemplate: 'layout',
});

Router.route('/', function() {
    this.render('results');
});

Router.route('/results', function () {
    this.render('results');
});

Router.route('/me', function() {
    //TODO: make /user/ownUserName route to /ownpage
    this.render('ownPage');
});

//this routes to other users
Router.route('/user/:username', {
    //TODO: set the likes list from this username to session?
    //if the username doesn't exist, render a site saying so
    data: function() {
        Session.set('thisUsername', this.params.username);
        this.render('userPage');
    }
});