var Note = require('../models/note.js');
var Chapter = require('../models/chapter.js');

// Get Commands
exports.getAll = function(done) {
  Note.find({ }).populate('user parent.item').exec( function (err, notes) {
    if (err) return done(err, null);
    Chapter.populate(notes, {path: 'parent.item.chapter'}, function (err, notes){
      if (err) return done(err, null);
      done(null, notes);
    })
  });
}

exports.getById = function(id, done) {
  Note.findById({'_id' : id }).populate('user parent.item').exec( function (err, note) {
    if (err) return done(err, null);
    done(null, note);
  });
}

exports.getByChapter = function(id, done) {
  Note.find({'parent.kind':'Chapter', 'parent.item':id }).populate('user parent.item').exec( function (err, notes) {
    if (err) return done(err, null);
    done(null, notes);
  });
}

exports.getByActivismEvent = function(id, done) {
  Note.find({'parent.item': id}).populate('user parent.item').exec( function (err, activism_events){
    done(null, activism_events);
  });
}

exports.getByUser = function(id, done) {
  Note.find({'user':id }).populate('user parent.item').exec( function (err, notes) {
    if (err) return done(err, null);
    done(null, notes);
  });
}

exports.getByChapter = function(id, done) {
  Note.find({'parent.kind':'Chapter', 'parent.item':id }).populate('user parent.item').exec( function (err, notes) {
    if (err) return done(err, null);
    done(null, notes);
  });
}

// Post Commands
exports.addNew = function(note, done) {
  console.log('note: ', note);
  var newNote = new Note({
    user: note.user,
    parent: {
      item: note.parent.item,
      kind: note.parent.kind,
    },
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
  updatedNote.date_modified = Date.now();
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