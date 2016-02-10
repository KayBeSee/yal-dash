var Note = require('../models/note.js');

// Get Commands
exports.getAll = function(done) {
  Note.find({ }, function (err, notes) {
    if (err) return done(err, null);
    done(null, notes);
  });
}

exports.getById = function(id, done) {
  Note.findById({'_id' : id }, function (err, note) {
    if (err) return done(err, null);
    done(null, note);
  });
}


// Post Commands
exports.addNew = function(note, done) {
  console.log('note', note);
  var newNote = new Note({
    user_id: note.user_id,
    parent_id: note.parent_id,
    parent_type: note.parent_type,
    date_created: Date.now(),
    date_modified: Date.now(),
    message: note.message
  });
  newNote.save( function (err, note) {
    if (err) done(err, null);
    done(null, note);
  });
}

// Put Commands
exports.updateById = function(id, updatedNote, done) {
  Note.findByIdAndUpdate(id, updatedNote, function (err, note) {
    if (err) return done(err, null);
    done(null, note);
  });
}

// Delete Commands
exports.deleteById = function (id, done){
  Note.findByIdAndRemove(id, function(err, note){
    if (err) return done(err, null);
    done(null, note);
  })
}