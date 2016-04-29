var ChapterController = require('../controllers/chapter');

module.exports = function(app) {

  // Get Routes
  app.get('/api/chapters', function (req, res) {
    if(req.query.school_name){
      ChapterController.searchByName( req.query.school_name, function (err, chapters) {
        res.send(chapters);
      });
    }
    else {
      ChapterController.getAll( function (err, chapters) {
      res.send(chapters);
    });
    }
  });

  app.get('/api/chapters/:id', function (req, res) {
    ChapterController.getById( req.params.id, function (err, chapter) {
      res.send(chapter);
    });
  });

  app.get('/api/chapters/state/:state', function(req, res){
    ChapterController.getByState(req.params.state, function(err, chapters){
      res.send(chapters);
    });
  });

  app.get('/api/chapters/region/:region', function(req, res){
    ChapterController.getByRegion(req.params.region, function(err, chapters){
      res.send(chapters);
    });
  });

  app.get('/api/chapters/chair/:name', function(req, res){
    ChapterController.getByStateChair(req.params.name, function(err, chapters){
      res.send(chapters);
    });
  });

  // Put Routes
  app.put('/api/chapters/:id', function (req, res) {
    ChapterController.updateById( req.params.id, req.body, function (err, chapter) {
      res.send(chapter);
    });
  });

  // Post Routes
  app.post('/api/chapters', function (req, res) {
    ChapterController.addNew(req.body, function (err, chapters) {
      if(err) console.log(err);
      res.send(chapters);
    });
  });

  // Delete Routes
  app.delete('/api/chapters/:id', function (req, res) {
    ChapterController.deleteById( req.params.id, function (err, chapter) {
      res.send(chapter);
    });
  });

}