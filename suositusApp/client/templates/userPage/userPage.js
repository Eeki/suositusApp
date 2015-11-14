Meteor.subscribe('Likes');

Template.body.events({
    'submit .new-like': function (event) {

        event.preventDefault();

        var like = event.target.like.value;
        console.log(like);

        //Session.set('likes', Session.get('likes') + like);
        Likes.insert({title: like});
        console.log(Likes.find({}));


    }
});

Template.body.helpers({
    likes: function () {
        console.log(Likes.find({}) + "TEstit");
        return Likes.find({});
    }
});

