Template.add.events({
    'submit .new-like': function (event) {
        event.preventDefault();

        //haetaan targetti joka on inputin nimeltä 'like' arvo
        var like = event.target.like.value;

        //lisätään jokaisen välin tilalle plussa jotta sen voi laittaa urliin
        like = like.replace(' ', '+'); //james+bond
        //OMDB:n urli josta haetaan kaikki leffan IMDB tiedot
        var likeUrl = 'http://www.omdbapi.com/?t=' + like + '&y=&plot=short&r=json';

        //getataan urlin tiedot
        HTTP.get(likeUrl, function(error, response) {
            if(error) {
                console.log(error);
            }
            else {
                console.log(response.content);
            }
        });

        //tänne pitää lisätä vielä systeemi ettei voi lisätä samaa leffa kahta kertaa

        //laitetaan väli takas leffan nimeen
        like = like.replace('+', ' '); //james bond

        //viitataan saveLike metodiin ja lähetetään sinne like muuttujan sisältämät arvot
        Meteor.call('saveLike', like);

        console.log(likeUrl);

        //buutataan text inputti takas tekstittömäksi
        event.target.like.value = "";
    }
});

Template.list.helpers({
    likes: function () {
        return Likes.find({});
    }
});
