Template.add.events({
    'submit .new-like': function (event) {
        event.preventDefault();

        //haetaan targetti joka on inputin nimeltä 'like' arvo
        var like = event.target.like.value;

        //lisätään jokaisen välin tilalle plussa jotta sen voi laittaa urliin
        like = like.replace(' ', '+'); //james+bond
        //OMDB:n urli josta haetaan kaikki leffan IMDB tiedot
        var likeUrl = 'http://www.omdbapi.com/?t=' + like + '&y=&plot=short&r=json';
        var movieId;

        //getataan sivulla olevat tiedot
        HTTP.get(likeUrl, function getID (error, response) {
            if (error) {
                console.log(error);
            }
            else {
                var movieContent = response.data;
                console.log(movieContent);

                //katso ettei leffaa ole jo tietokannassa movie id avulla
                Movies.insert({
                    id: movieContent["imdbID"],
                    title: movieContent["Title"],
                    year: movieContent["Year"],
                    plot: movieContent["Plot"],
                    imgSrc: movieContent["Poster"]
                });

                movieId = movieContent["imdbID"];

                saveLike(movieId);
            }
            //console.log(movieContent["imdbID"]);
        });

        //tänne pitää lisätä vielä systeemi ettei voi lisätä samaa leffa kahta kerta
        like = like.replace('+', ' ');
        //viitataan saveLike metodiin ja lähetetään sinne like muuttujan sisältämät arvo
        console.log(movieId);

        console.log(likeUrl);

        //buutataan text inputti takas tekstittömäksi
        event.target.like.value = "";
    }
});

Template.list.events({
    'click .like-button': function (event) {
        event.preventDefault();
        console.log("BUBBU");
    }
});

Template.list.helpers({
    likes: function () {
        console.log(Movies.find().fetch());
        return Movies.find();
    }
});

function saveLike (movieId) {
    Likes.insert({
        createdBy: Meteor.userId(),
        createdAt: new Date(),
        movieId: movieId
    });
}

