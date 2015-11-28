Template.userPage.helpers({
    userLikes: function() {
        findOtherUserLikes();
        return findOtherUserLikes().reverse();
    }
});

Template.userPage.helpers({
    noUserLikes: function() {
        return findOtherUserLikes().length == 0;
    }
});

Template.userPage.helpers({
    thisUsername: function() {
        //TODO: format the name to make first letter capitalized
        return Session.get('thisUsername');
    }
});

function findOtherUserLikes () {
    var loadableUser = Session.get('thisUsername');
    var thisUserId = Meteor.call('findOther', loadableUser,
        function(error, result) {
            console.log("rum")
            console.log(result);
    });
    //console.log(thisUserId);
    return Likes.find({userId: thisUserId}).fetch();
}
