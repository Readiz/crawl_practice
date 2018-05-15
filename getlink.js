var client = require('cheerio-httpcli');
var urlType = require('url');

var url = "https://www.naver.com/";
var param = {};

client.fetch(url, param, function(err, $, res) {
	// Check errors
	if(err) { console.error(err); return; }

	// Print download result
	$('a').each(function(idx) {
		var text = $(this).text().replace('\n', '');
		var href = $(this).attr('href');
		if (!href) return;
		href = urlType.resolve(url, href);
		console.log(text + ': ' + href);
	});
});

