
//Dependencies
var bodyParser = require('body-parser');
var path = require('path');
var express = require('express');
var app = express();
port =  8080;

//Sets up the Express app to handle data parsing
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded( { extended: true } ));
	app.use(bodyParser.text());
	// app.use(bodyParser.json( { type: "application/vnd.api+json" } ));




//Starts the server to begin listening
	app.listen(port, function() {
    console.log('Listening on port ' + port);
});