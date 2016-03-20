var ActivismEvent = require('../models/activism_event.js');
var Chapter = require('../models/chapter');

// Get Commands
exports.getAll = function(done) {
  ActivismEvent.find({ }).populate('chapter').exec( function (err, events) {
    if (err) return done(err, null);
    done(null, events);
  });
}

exports.getById = function(id, done) {
  ActivismEvent.findById({'_id' : id }).populate('chapter').exec( function (err, event) {
    if (err) return done(err, null);
    done(null, event);
  });
}

exports.getByChapter = function(chapter_id, done) {
  ActivismEvent.find({'chapter': chapter_id}, function (err, activism_events){
    done(null, activism_events);
  });
}

exports.getByState = function(state, done) {
  Chapter.distinct("_id", {'state' : state }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter': {$in: chapters} }).populate('chapter').exec( function (err, activism_events){
      done(null, activism_events);
    });
  });
}

exports.getByRegion = function(region, done) {
  Chapter.distinct("_id", {'region' : region }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter': {$in: chapters} }).populate('chapter').exec( function (err, activism_events){
      done(null, activism_events);
    });
  });
}

exports.getByChair = function(name, done) {
  Chapter.distinct("_id", {'state_chair_assigned' : name }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter': {$in: chapters} }).populate('chapter').exec( function (err, activism_events){
      done(null, activism_events);
    });
  });
}


// Post Commands
exports.addNew = function(event, done) {
  var newActivismEvent = new ActivismEvent({
    chapter: event.chapter,
    type: event.type,
    status: event.status,
    blog_post_url: event.blog_post_url,
    date_created: Date.now(),
    date_modified: Date.now(),
    date_executed: event.date_executed
  });
  newActivismEvent.save( function (err, event) {
    if (err) done(err, null);
    done(null, event);
  });
}

// Put Commands
exports.updateById = function(id, updatedActivismEvent, done) {
  ActivismEvent.findByIdAndUpdate(id, updatedActivismEvent, function (err, event) {
    if (err) return done(err, null);
    done(null, event);
  });
}

// Delete Commands
exports.deleteById = function (id, done){
  ActivismEvent.findByIdAndRemove(id, function(err, event){
    if (err) return done(err, null);
    done(null, event);
  })
}