var queries = require('../db/queries.js');
var bodyParser = require('body-parser');
module.exports = function(app){
    var urlEnc = bodyParser.urlencoded();
    /*
    app.get('/', function(req,res) {
        res.render('index',{});
    });

    app.get('experiments/', function(req, res) {
        res.render('experiments',{});
    });

    app.get('experiment/:id', function(req, res) {
        res.render('experiment',{});
    });

    app.post('experiment/:id/subject/:sub_id/getData', function(req, res) {
        res.render('getdata',{})
    });

    app.get('experiment/:id/subject/:sub_id/getStimulus', function(req, res) {
        res.render('getstimulus',{})
    });*/

    app.get('/subject/:id.json', function(req,res) {
        req.db.any(queries.get_channels, {}).then(function (data) {
             res.json({subject_id: req.params.id, channels: data});
        });
    });

    app.post('/subject/:id/getData.json', urlEnc, function (req,res) {
        req.db.any(queries.get_raw_data_by_channel, {channel: req.body.channel, subject: req.params.id}).then(function (data) {
            res.json(data);
         });
    });
}
