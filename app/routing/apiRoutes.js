// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');


	// Total list of friend entries
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	// Add new friend entry
	app.post('/api/friends', function(req, res) {
		// Capture the user input object
		var userInput = req.body;
	


		// dont know how to calculate the difference and do the match
		

		// Add new user
		friends.push(userInput);

		// Send appropriate response
		res.json({status: 'OK'});
	});
