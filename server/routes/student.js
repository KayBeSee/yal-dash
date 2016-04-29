var StudentController = require('../controllers/student');

module.exports = function(app) {

  // Get Routes
  app.get('/api/students', function (req, res) {
    StudentController.getAll( function (err, students) {
      res.send(students);
    });
  });

  app.get('/api/students/:id', function (req, res) {
    StudentController.getById( req.params.id, function (err, student) {
      res.send(student);
    });
  });

  app.get('/api/students/state/:state', function(req, res){
    StudentController.getByState(req.params.state, function(err, chapters){
      res.send(chapters);
    });
  });

  // Put Routes
  app.put('/api/students/:id', function (req, res) {
    StudentController.updateById( req.params.id, req.body, function (err, student) {
      res.send(student);
    });
  });

  // Post Routes
  app.post('/api/students', function (req, res) {
    StudentController.addNew(req.body, function (err, students) {
      if(err) console.log(err);
      res.send(students);
    });
  });

  // Delete Routes
  app.delete('/api/students/:id', function (req, res) {
    StudentController.deleteById( req.params.id, function (err, student) {
      res.send(student);
    });
  });

}