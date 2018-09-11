
var path = require('path');
module.exports = function(app) {
	
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
//i dont have a home page and i am just trying to direct to the survey page by inputting /home
	app.get('/home', function(req, res) {
		res.sendFile(path.join(__dirname, '../public/survey.html'));
	});
};
