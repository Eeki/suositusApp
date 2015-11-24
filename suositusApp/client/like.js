Template.liketemplate.helpers({
	liked: function () {
		if (Likes.findOne(this._id)) {
			return true;
		} else {
			return false;
		}
	}
});

Template.liketemplate.events({
	'click #like': function(event) {
    	event.preventDefault();
        var res = Items.findOne(this._id);
        console.log(res)
    }
});
