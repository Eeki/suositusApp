Template.resultstemplate.helpers ({
  items: function() {
  	//console.log('results.js ' + Session.get('searchInput'));
  	var reg = buildRegExp(Session.get('searchInput'));
  	return Items.find({'Title': reg}); 
  }
});

function buildRegExp(searchText) {
  // this is a dumb implementation copied from https://meteorhacks.com/implementing-an-instant-search-solution-with-meteor
  if (searchText) 
  {
  	var parts = searchText.trim().split(/[ \-\:]+/);
  	return new RegExp("(" + parts.join('|') + ")", "ig");
  } 
  
  else 
  {
  	return '';
  }
}

//https://github.com/furrio/meteor-fuse