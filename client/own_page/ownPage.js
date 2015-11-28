Template.ownPage.helpers({
    ownLikes: function() {
        return findUserLikes().reverse();
    }
});

Template.ownPage.helpers({
    noLikes: function () {
        return findUserLikes().length == 0;
    }
});

Template.deleteLike.events({
    'click button': function () {
        Meteor.call('deleteLike',
            {userId: Meteor.userId(), title: this.title});
    }
});

function findUserLikes () {
    return Likes.find({userId: Meteor.userId()}).fetch();
}

