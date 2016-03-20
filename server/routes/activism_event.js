var ActivismEventController = require('../controllers/activism_event');

module.exports = function(app) {

  // Get Routes
  app.get('/api/activism', function (req, res) {
    ActivismEventController.getAll( function (err, events) {
      res.send(events);
    });
  });

  app.get('/api/activism/:id', function (req, res) {
    ActivismEventController.getById( req.params.id, function (err, event) {
      res.send(event);
    });
  });

  app.get('/api/activism/chapter/:id', function (req, res) {
    ActivismEventController.getByChapter( req.params.id, function (err, events) {
      res.send(events);
    });
  });

  app.get('/api/activism/state/:state', function (req, res) {
    ActivismEventController.getByState( req.params.state, function (err, events) {
      res.send(events);
    });
  });

  app.get('/api/activism/region/:region', function (req, res) {
    ActivismEventController.getByRegion( req.params.region, function (err, events) {
      res.send(events);
    });
  });

  app.get('/api/activism/chair/:name', function (req, res) {
    ActivismEventController.getByChair( req.params.name, function (err, events) {
      res.send(events);
    });
  });

  // Put Routes
  app.put('/api/activism/:id', function (req, res) {
    console.log('put body: ');
    console.log(req.body);
    ActivismEventController.updateById( req.body.id, req.body, function (err, event) {
      res.send(event);
    });
  });

  // Post Routes
  app.post('/api/activism', function (req, res) {
    console.log('Activism Event Post');
    ActivismEventController.addNew(req.body, function (err, events) {
      if(err) console.log(err);
      res.send(events);
    });
  });

  // Delete Routes
  app.delete('/api/activism/:id', function (req, res) {
    ActivismEventController.deleteById( req.params.id, function (err, event) {
      res.send(event);
    });
  });

}