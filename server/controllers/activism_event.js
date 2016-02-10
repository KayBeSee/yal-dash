var ActivismEvent = require('../models/activism_event.js');
var Chapter = require('../models/chapter');

// Get Commands
exports.getAll = function(done) {
  ActivismEvent.find({ }, function (err, events) {
    if (err) return done(err, null);
    done(null, events);
  });
}

exports.getById = function(id, done) {
  ActivismEvent.findById({'_id' : id }, function (err, event) {
    if (err) return done(err, null);
    done(null, event);
  });
}

exports.getByState = function(state, done) {
  Chapter.distinct("_id", {'state' : state }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter_id': {$in: chapters} }, function (err, activism_events){
      done(null, activism_events);
    });
  });
}

exports.getByRegion = function(region, done) {
  Chapter.distinct("_id", {'region' : region }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter_id': {$in: chapters} }, function (err, activism_events){
      done(null, activism_events);
    });
  });
}

exports.getByChair = function(name, done) {
  Chapter.distinct("_id", {'state_chair_assigned' : name }, function (err, chapters) {
    if (err) return done(err, null);
    ActivismEvent.find({'chapter_id': {$in: chapters} }, function (err, activism_events){
      done(null, activism_events);
    });
  });
}


// Post Commands
exports.addNew = function(event, done) {
  console.log('event', event);
  var newActivismEvent = new ActivismEvent({
    chapter_id: event.chapter_id,
    type: event.type,
    status: event.status,
    blog_post_url: event.blog_post_url,
    date_created: Date.now(),
    date_modified: event.date_modified

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