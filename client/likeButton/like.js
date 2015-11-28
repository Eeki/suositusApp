Template.like.events ({
    'click button': function (event) {
        event.preventDefault();
        //can be replaced with this.id, this.index or anything
        //user has to be logged in for the like to register
        checkCanUserLike(this.title);
    }
});

function checkCanUserLike (thisTitle) {
    if (likeAlreadyExists(thisTitle)) {
        //dunno if the specific recommendations idea is good
        Notifications.warn('You have already liked ' + thisTitle,
            "You seem to be really into that movie. You can peer the specific recommendations " +
            "for this film from its own page!");
    }
    else if(Meteor.userId() != null) {
        //maybe insert the username instead of userid?
        Meteor.call('insertLike',
            {userId: Meteor.userId(), title: thisTitle});
        //do we even want this notification?
        Notifications.success("You just liked " + thisTitle + "!",
            "Our robots will take that into account when hand picking content for you.");
    }
    else {
        console.log("You need to be logged in to like!")
        Notifications.error('Sorry, you need to be logged in to like ' + thisTitle + ' :(',
            "It's super easy to create an account, check out the upper right corner and " +
            "you'll have a tailored dish of the best recommendations served to you daily!")
    }
}

function likeAlreadyExists (thisTitle) {
    if(Likes.findOne({userId: Meteor.userId(), title: thisTitle})
        && Meteor.userId() != null) {
        return true;
    }
    else {
        return false;
    }
}
