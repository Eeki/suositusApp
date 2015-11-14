Template.add.events({
    'submit .new-like': function (event) {
        event.preventDefault();

        var like = event.target.like.value;
        like = like.replace(' ', '+'); //james+bond
        var likeUrl = 'http://www.omdbapi.com/?t=' + like + '&y=&plot=short&r=json';

        HTTP.get(likeUrl, function(error, response) {
            if(error) {
                console.log(error);
            }
            else {
                console.log(response.content);
            }
        });

        like = like.replace('+', ' '); //james+bond
        Likes.insert({title: like});
        console.log(likeUrl);
        event.target.like.value = "";
    }
});

Template.list.helpers({
    likes: function () {
        return Likes.find({});
    }
});