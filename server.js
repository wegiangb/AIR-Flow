var express = require('express'),
    app = express(),
    postgres = require('pg-promise')({}),
    config = require('./air-config.js'),
    db = postgres(config.db);

app.use(dbConnect);


require('./app/routes/routes.js')(app);

app.listen(config.port);

console.log('🌏 => Running on localhost:'+config.port);


//Database Middleware
function dbConnect(req, res, next) {
	req.db = db;
	next();
}