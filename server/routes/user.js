var UserController = require('../controllers/user');

module.exports = function(app) {

  // Get Routes
  app.get('/api/users', function (req, res) {
    UserController.getAll( function (err, users) {
      res.send(users);
    });
  });

  app.get('/api/users/:id', function (req, res) {
    UserController.getById( req.params.id, function (err, user) {
      res.send(user);
    });
  });

  // Put Routes
  app.put('/api/users/:id', function (req, res) {
    UserController.updateById( req.body.id, req.body, function (err, user) {
      res.send(user);
    });
  });

  // Post Routes
  app.post('/api/users', function (req, res) {
    UserController.addNew(req.body, function (err, users) {
      if(err) console.log(err);
      res.send(users);
    });
  });

  // Delete Routes
  app.delete('/api/users/:id', function (req, res) {
    UserController.deleteById( req.params.id, function (err, user) {
      res.send(user);
    });
  });

}