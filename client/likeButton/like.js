Template.like.events ({
    'click #like': function (event) {
        event.preventDefault();
        //can be replaced with this.id, this.index or anything
        //user has to be logged in for the like to register
        checkCanUserLike(this.imdbID);
    }
});

Template.like.events({
    'click #unlike': function (event) {
        event.preventDefault();
        Meteor.call('removeLike', {userId: Meteor.userId(), imdbID: this.imdbID});
    }
});

Template.like.helpers({
    liked: function(){
        if(likeAlreadyExists(this.imdbID)) {
            return true;
        }
        else {
            return false;
        }
    }
});

function checkCanUserLike (thisID) {
    if(Meteor.userId() != null) {
        //maybe insert the username instead of userid?
        Meteor.call('insertLike',
            {userId: Meteor.userId(), imdbID: thisID});
    }
    else {
        console.log("You need to be logged in to like!")
        Notifications.error('Sorry, you need to be logged in to like ' + thisTitle + ' :(',
            "It's super easy to create an account, check out the upper right corner and " +
            "you'll have a tailored dish of the best recommendations served to you daily!")
    }
}

function likeAlreadyExists (thisID) {
    if(Likes.findOne({userId: Meteor.userId(), imdbID: thisID})
        && Meteor.userId() != null) {
        return true;
    }
    else {
        return false;
    }
}
