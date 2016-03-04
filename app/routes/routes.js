var queries = require('../db/queries.js');
var bodyParser = require('body-parser');
module.exports = function(app){
    var urlEnc = bodyParser.urlencoded({extended: true});
    /*
    DATABASE CHANGE REQUIRED FOR USE OF THESE ROUTES
    app.get('/', function(req,res) {
        res.render('index',{});
    });

    app.get('experiments/', function(req, res) {
        res.render('experiments',{});
    });

    app.get('experiment/:id', function(req, res) {
        res.render('experiment',{});
    });
    */
    app.get('/subjects', function (req,res) {
         req.db.any(queries.get_subjects_temp, {}).then(function (data) {
              res.json(data);
         })
    })

    /*
    Get the channels supported by the subject
    */
    app.get('/subject/:id', function(req,res) {
        req.db.any(queries.get_channels, {}).then(function (data) {
             res.json({subject_id: req.params.id, channels: data});
        });
    });
    /*
    Get Raw Data Collected on Subject
    POST Request:
    Channel ID
    Subject ID
    */
    app.post('/subject/:id/getData', urlEnc, function (req,res) {
        req.db.any(queries.get_raw_data_by_channel, {channel: req.body.channel, subject: req.params.id}).then(function (data) {
            res.json(data);
         });
    });
    /*
    Get the Stimulus Data on the subjects
    GET Request:
    Subject ID
    */
    app.get('/subject/:id/getStimulus', urlEnc, function (req,res) {
         req.db.any(queries.get_stim, {subject: req.params.id}).then(function (data) {
            res.json(data);
         });
    });
}
