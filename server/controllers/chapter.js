var Chapter = require('../models/chapter.js');

// Get Commands
exports.getAll = function(done) {
  Chapter.find({ }, function (err, chapters) {
    if (err) return done(err, null);
    done(null, chapters);
  });
}

exports.getById = function(id, done) {
  Chapter.findById({'_id' : id }, function (err, chapter) {
    if (err) return done(err, null);
    done(null, chapter);
  });
}

exports.searchByName = function(term, done){
  Chapter.find({ school_name: {$regex : "^" + term}}, function(err, chapters){
    if (err) done(err, null);
    done(null, chapters);
  });
}

exports.getByState = function(state, done) {
  Chapter.find({'state' : state }, function (err, chapters) {
    if (err) return done(err, null);
    done(null, chapters);
  });
}

exports.getByRegion = function(region, done) {
  Chapter.find({'region' : region }, function (err, chapters) {
    if (err) return done(err, null);
    done(null, chapters);
  });
}

exports.getByStateChair = function(name, done) {
  Chapter.find({'state_chair_assigned' : name }, function (err, chapters) {
    if (err) return done(err, null);
    done(null, chapters);
  });
}


// Post Commands
exports.addNew = function(chapter, done) {
  console.log('chapter', chapter);
  var newChapter = new Chapter({
  school_name: chapter.school_name,
  city: chapter.city,
  state: chapter.state,
  region: chapter.region,
  status: chapter.status,
  tier: chapter.tier,
  date_created: Date.now(),
  date_modified: Date.now(),
  reply_date: chapter.reply_date,
  referral: chapter.referral,
  state_chair_assigned: chapter.state_chair_assigned,
  chapter_facebook_url: chapter.chapter_facebook_url,
  president: {
    first_name: chapter.president.first_name,
    last_name: chapter.president.last_name,
    email: chapter.president.email,
    phone: chapter.president.phone,
    street_1: chapter.president.street_1,
    street_2: chapter.president.street_2,
    city: chapter.president.city,
    state: chapter.president.state,
    zipcode: chapter.president.zipcode,
    facebook_url: chapter.president.facebook_url
  },
  free_speech: {
    rating: chapter.free_speech.rating,
    zone: chapter.free_speech.zone,
    target: chapter.free_speech.target,
    status: chapter.free_speech.status
  }
  });
  newChapter.save( function (err, chapter) {
    if (err) done(err, null);
    done(null, chapter);
  });
}

// Put Commands
exports.updateById = function(id, updatedChapter, done) {
  updatedChapter.date_modified = Date.now();
  Chapter.findByIdAndUpdate(id, updatedChapter, function (err, chapter) {
    if (err) return done(err, null);
    done(null, chapter);
  });
}

// Delete Commands
exports.deleteById = function (id, done){
  Chapter.findByIdAndRemove(id, function(err, chapter){
    if (err) return done(err, null);
    done(null, chapter);
  })
}