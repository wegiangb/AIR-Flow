module.exports = function(app){
    app.get('/', function(req,res) {
        res.json({

        })
    });

    app.get('experiments/', function(req, res) {

    });

    app.get('experiment/:id', function(req, res) {

    });

    app.post('experiment/:id/subject/:sub_id/getData', function(req, res) {

    });

    app.get('experiment/:id/subject/:sub_id/getStimulus', function(req, res) {

    });

}
