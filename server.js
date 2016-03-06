var express = require('express'),
    app = express(),
    postgres = require('pg-promise')({}),
    config = require('./air-config.js'),
    db = postgres(config.db);

app.use(dbConnect);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

require('./app/routes/routes.js')(app);

app.listen(config.port);

console.log('🌏  => Running on localhost:'+config.port);


//Database Middleware
function dbConnect(req, res, next) {
	req.db = db;
	next();
}
