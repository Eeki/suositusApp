Template.add.events({
    'submit .new-like': function (event) {
        event.preventDefault();

        var like = event.target.like.value;

        Meteor.call('saveLike', like);

        event.target.like.value = ""

    }
});

Template.list.helpers({
    likes: function () {
        console.log(Likes.find().fetch());
        return Likes.find().fetch();
    }
});