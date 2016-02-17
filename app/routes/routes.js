module.exports = function(app){
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
    });

}
