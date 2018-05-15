var client = require('cheerio-httpcli');

var url = "https://www.readiz.com/";
var param = {};

client.fetch(url, param, function(err, $, res) {
	// Check errors
	if(err) { console.error(err); return; }

	// Print download result
	var body = $.html();
	console.log(body);
});

