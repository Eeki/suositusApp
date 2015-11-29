Template.ownPage.helpers({
    ownLikes: function() {
        var userLikes = findUserLikes().reverse();

        var thisUserLikes = new Array();
        for(var i = 0; i < userLikes.length; i++) {
            console.log(userLikes[i].imdbID);
            var foundItem = Items.findOne({imdbID: userLikes[i].imdbID});
            thisUserLikes.push(foundItem);
        }
        console.log(thisUserLikes);
        return thisUserLikes;
    }
});

Template.ownPage.helpers({
    noLikes: function () {
        return findUserLikes().length == 0;
    }
});

function findUserLikes () {
    return Likes.find({userId: Meteor.userId()}).fetch();
}

