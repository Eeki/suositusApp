/*Meteor.publish('likes', function() {
    var currentUserId = this.userId;
    return Likes.find();
});*/

Meteor.publish('likes', function(){
    return Likes.find();
});

Meteor.publish('movies', function() {
    return Movies.find();
})

Meteor.startup(function () {
});
