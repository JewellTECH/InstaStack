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
		for(var i = 0; i < response.data.length; i++){
			var fullWidth = $( document ).width();
			var fullHeight = $( document ).height();
			var imageData = response.data[i];
			var instaimage = $('<div class="panel instaimage" id="'+imageData.id+'">');
			instaimage.append('<img src="'+imageData.images.low_resolution.url+'" />');
			instaimage.append('<p class="caption">'+imageData.user.full_name+'</p');
			instaimage.css('position', 'absolute');
			instaimage.css('left', Math.random()*(fullWidth-350) + 'px');
			instaimage.css('top', 100+Math.random()*(fullHeight-350-50-100) + 'px');
			instaimage.rotate(-5 + Math.random()*10);
			$('#instafeed').append(instaimage);
			$('#'+imageData.id).delay(3000*i).fadeIn(1000);
		}
	}
});
feed.run();