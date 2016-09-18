var http = require('http');


const utils = {
	getTransactions(cb) {
		var options = {
		  host: '45.79.165.171',
		  port: '26257',
		  path: '/path',
		  method: 'GET',
		  headers: {
		    'Content-Type': 'application/x-www-form-urlencoded',
		    'Content-Length': post_data.length
		  }
		};

		var req = http.request(options, function(res) {
		  	cb(res);
		});

		// write the request parameters
		req.write('post=data&is=specified&like=this');
		req.end();
	}
};


export default utils;