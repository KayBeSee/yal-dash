var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var chapter_schema = new Schema({
  school_name: String,
  city: String,
  state: String,
  region: String,
  status: String,
  tier: String,
  date_created: Date,
  date_modified: Date,
  reply_date: Date,
  referral: String,
  state_chair_assigned: String,
  chapter_facebook_url: String,
  president: {
    first_name: String,
    last_name: String,
    email: String,
    phone: Number,
    street_1: String,
    street_2: String,
    city: String,
    state: String,
    zipcode: String,
    facebook_url: String
  },
  free_speech: {
    rating: String,
    zone: Boolean,
    target: Boolean,
    status: String
  }
});

module.exports = mongoose.model('Chapter', chapter_schema);