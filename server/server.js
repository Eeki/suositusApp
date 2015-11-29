Meteor.publish('likes', function() {
    return Likes.find();
});

Meteor.publish('items', function() {
    return Items.find();
});

Meteor.publish('allUsers', function() {
    return Meteor.users.find({}, {username: 1, _id: 1});
});

Meteor.methods({
    'insertLike': function(insertableData) {
        Likes.insert(insertableData);
    },

    'removeLike': function(deletableData) {
        Likes.remove(deletableData);
    },

    'findOther': function(findableUsername) {
        var user = Meteor.users.findOne({username: findableUsername}, {_id: 1});
        return user;
    }
});
