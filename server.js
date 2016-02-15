var express = require('express'),
    app = express(),
    postgres = require('pg-promise')({}),
    config = require('./air-config.js'),
    //db = postgres(config.db),
    bodyParser = require('body-parser');

app.set('view engine', 'jade');
app.use(bodyParser.json());

require('./app/routes/routes.js')(app);

app.listen(config.port);

console.log('🌏  => Running on localhost:'+config.port);
