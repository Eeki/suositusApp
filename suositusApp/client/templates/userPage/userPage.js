Template.add.events({
    'submit .new-like': function (event) {
        event.preventDefault();

        var like = event.target.like.value;
        Likes.insert({title: like});

        event.target.like.value = "";
    }
});

Template.list.helpers({
    likes: function () {
        return Likes.find({});
    }
});