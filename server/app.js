var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/emberData');
require('./models/Notes');

var routes = require('./routes/index');
var app = express();

app.use(function(req, res, next) {
	    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
			  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
					  	res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
							    next();
});

app.use('/', routes);

app.listen('4500');
// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		res.render('error', {
			message: err.message,
			error: err
		});
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.render('error', {
		message: err.message,
		error: {}
	});
});


module.exports = app;
