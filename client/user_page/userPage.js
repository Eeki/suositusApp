//TODO: something pushes the thumbnails to the side by two or three
//maybe it is the wrong sizes of the boxes
//so that bootstrap thinks they cant fit under
Template.userPage.helpers({
    userLikes: function() {
        //console.log(Meteor.users.find().fetch());
        //reversed so the newest like is shown first
        var userLikes = findOtherUserLikes().reverse();
        var thisUserLikes = new Array();
        for(var i = 0; i < userLikes.length; i++) {
            //console.log(userLikes[i].imdbID);
            var foundItem = Items.findOne({imdbID: userLikes[i].imdbID});
            thisUserLikes.push(foundItem);
        }

        return thisUserLikes;
    }
});

Template.userPage.helpers({
    noUserLikes: function() {
        return findOtherUserLikes().length == 0;
    }
});

Template.userPage.helpers({
    thisUsername: function() {
        return Session.get('thisUsername');
    }
});

//the user check fixes the error where the cursor returns a lotta text
Template.userPage.helpers({
    userExists: function() {
        return checkIfUserExists();
    }
});

//TODO: say if user doesn't exist
function findOtherUserLikes () {
    var findableUser = Session.get('thisUsername');
    var thisUser = Meteor.users.findOne({username: findableUser});
    return Likes.find({userId: thisUser._id}).fetch();
}

function checkIfUserExists() {
    var checkableUser = Session.get('thisUsername')
    var thisUser = Meteor.users.findOne({username: checkableUser});

    if(thisUser == undefined) {
        return false;
    }
    else {
        return true;
    }
}
