var Student = require('../models/student.js');

// Get Commands
exports.getAll = function(done) {
  Student.find({ }, function (err, students) {
    if (err) return done(err, null);
    done(null, students);
  });
}

exports.getById = function(id, done) {
  Student.findById({'_id' : id }, function (err, student) {
    if (err) return done(err, null);
    done(null, student);
  });
}

exports.getByState = function(state, done) {
  Student.find({'school_state' : state }, function (err, students) {
    if (err) return done(err, null);
    done(null, students);
  });
}


// Post Commands
exports.addNew = function(student, done) {
  var newStudent = new Student({
  first_name: student.first_name,
  last_name: student.last_name,
  phone: student.phone,
  email: student.email,
  facebook_url: student.facebook_url,
  grad_year: student.grad_year,
  date_created: Date.now(),
  referral: student.referral,
  school_name: student.school_name,
  school_city: student.school_city,
  school_state: student.school_state,
  school_region: student.school_region,
  home_city: student.home_city,
  home_state: student.home_state,
  home_region: student.home_region
  });
  newStudent.save( function (err, student) {
    if (err) done(err, null);
    done(null, student);
  });
}

// Put Commands
exports.updateById = function(id, updatedStudent, done) {
  Student.findByIdAndUpdate(id, updatedStudent, function (err, student) {
    if (err) return done(err, null);
    done(null, student);
  });
}

// Delete Commands
exports.deleteById = function (id, done){
  Student.findByIdAndRemove(id, function(err, student){
    if (err) return done(err, null);
    done(null, student);
  })
}