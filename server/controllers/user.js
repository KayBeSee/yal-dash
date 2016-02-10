var User = require('../models/user.js');

// Get Commands
exports.getAll = function(done) {
  User.find({ }, function (err, users) {
    if (err) return done(err, null);
    done(null, users);
  });
}

exports.getById = function(id, done) {
  User.findById({'_id' : id }, function (err, user) {
    if (err) return done(err, null);
    done(null, user);
  });
}

// Post Commands
exports.addNew = function(user, done) {
  var newUser = new User({
  first_name: user.first_name,
  last_name: user.last_name,
  phone: user.phone,
  email: user.email,
  facebook_url: user.facebook_url,
  date_created: user.date_created,
  picture_url: user.picture_url,
  region: user.region,
  role: user.role
  });
  newUser.save( function (err, user) {
    if (err) done(err, null);
    done(null, user);
  });
}

// Put Commands
exports.updateById = function(id, updatedUser, done) {
  User.findByIdAndUpdate(id, updatedUser, function (err, user) {
    if (err) return done(err, null);
    done(null, user);
  });
}

// Delete Commands
exports.deleteById = function (id, done){
  User.findByIdAndRemove(id, function(err, user){
    if (err) return done(err, null);
    done(null, user);
  })
}