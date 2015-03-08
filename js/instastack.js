var feed = new Instafeed({
	get: 'tagged',
	tagName: 'jewellplc',
	clientId: '9199226d9c454e12bb7ad4ea18ab2267',
	resolution: 'low_resolution'
});
feed.run();