if (Meteor.isClient) {

  Session.setDefault('likes', 
    {"movie": {"title": "Terminator 3: Rise of the Machines", "image": "http://ia.media-imdb.com/images/M/MV5BMTk5NzM1ODgyN15BMl5BanBnXkFtZTcwMzA5MjAzMw@@._V1_SX300.jpg"}
});

  Template.body.helpers({
    list: function () {
      return Session.get('likes');
    }
  });

  Template.body.events({
    'submit .new-like': function (event) {
      
      event.preventDefault();

      var like = event.target.like.value;

      Session.set('likes', Session.get('likes') + like);

      event.target.text.value = "";
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
