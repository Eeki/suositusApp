/*Meteor.publish('likes', function() {
    var currentUserId = this.userId;
    return Likes.find();
});*/
Likes = new Mongo.Collection('likes');
Meteor.startup(function () {


});

Meteor.methods({
    'saveLike': function (like) {
        Likes.insert({title: like});
    }
});
