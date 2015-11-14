/*Meteor.publish('likes', function() {
    var currentUserId = this.userId;
    return Likes.find();
});*/

Meteor.publish('likes', function(){
    return Likes.find();
});

Meteor.startup(function () {
});

Meteor.methods({
    'saveLike': function (like) {

        Likes.insert({
            createdBy: Meteor.userId(),
            createdAt: new Date(),
            title: like
        });

        //console.log("kayttaja: " +currentUserId+ " tallensi");
        //console.log('like: ' +JSON.stringify(Likes.find({_id: currentUserId}).title));
    }
});
