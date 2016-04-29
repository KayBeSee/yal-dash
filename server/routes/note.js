var NotesController = require('../controllers/note');

module.exports = function(app) {

  // Get Routes
  app.get('/api/notes', function (req, res) {
    NotesController.getAll( function (err, notes) {
      res.send(notes);
    });
  });

  app.get('/api/notes/:id', function(req, res){
    NotesController.getById(req.params.id, function(err, notes){
      res.send(notes);
    });
  });

  app.get('/api/notes/chapter/:id', function(req, res){
    NotesController.getByChapter(req.params.id, function(err, notes){
      res.send(notes);
    });
  });

  app.get('/api/notes/activism_event/:id', function(req, res){
    NotesController.getByActivismEvent(req.params.id, function(err, notes){
      res.send(notes);
    });
  });

  app.get('/api/notes/state/:state', function(req, res){
    NotesController.getByState(req.params.state, function(err, notes){
      res.send(notes);
    });
  });

  app.get('/api/notes/region/:region', function(req, res){
    NotesController.getByRegion(req.params.region, function(err, notes){
      res.send(notes);
    });
  });

  app.get('/api/notes/users/:id', function(req, res){
    NotesController.getByUser(req.params.id, function(err, notes){
      res.send(notes);
    });
  });

  // Put Routes
  app.put('/api/notes/:id', function (req, res) {
    NotesController.updateById( req.params.id, req.body, function (err, note) {
      res.send(note);
    });
  });

  // Post Routes
  app.post('/api/notes', function (req, res) {
    NotesController.addNew(req.body, function (err, notes) {
      if(err) console.log(err);
      res.send(notes);
    });
  });

  // Delete Routes
  app.delete('/api/notes/:id', function (req, res) {
    NotesController.deleteById( req.params.id, function (err, note) {
      res.send(note);
    });
  });

}