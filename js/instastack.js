// This adds a function that lets us rotate elements smoothly, with cross-platform compatibility.
jQuery.fn.rotate = function(degrees) {
    $(this).css({'-webkit-transform' : 'rotate('+ degrees +'deg)',
                 '-moz-transform' : 'rotate('+ degrees +'deg)',
                 '-ms-transform' : 'rotate('+ degrees +'deg)',
                 'transform' : 'rotate('+ degrees +'deg)'});
    return $(this);
};

var feed = new Instafeed({
	get: 'tagged',
	tagName: 'jewellplc',
	clientId: '9199226d9c454e12bb7ad4ea18ab2267',
	resolution: 'low_resolution',
	template: '<div class="panel instaimage"><img src="{{image}}" /><p>@{{model.user.username}}</p></div>',
	mock: true,
	success: function(response){

		// We need the page width and height in order to position our images.
		var fullWidth = $( document ).width();
		var fullHeight = $( document ).height();

		for(var i = 0; i < response.data.length; i++){

			// Now, we treat each of the response's data items separately.
			var imageData = response.data[i];
			var instaimage = $('<div class="panel instaimage" id="'+imageData.id+'">');

			// Add the image
			instaimage.append('<img src="'+imageData.images.low_resolution.url+'" />');

			// Add the caption
			instaimage.append('<p class="caption">'+imageData.user.full_name+'</p');

			// Randomly position and rotate the image
			instaimage.css('position', 'absolute');
			instaimage.css('left', Math.random()*(fullWidth-350) + 'px');
			instaimage.css('top', 100+Math.random()*(fullHeight-350-50-100) + 'px');
			instaimage.rotate(-5 + Math.random()*10);

			// Put this div into the page!
			$('#instafeed').append(instaimage);

			// Animates the image's entry
			$('#'+imageData.id).delay(3000*i).fadeIn(1000);

		}

	}
});
feed.run();