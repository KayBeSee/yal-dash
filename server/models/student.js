var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var student = new Schema({
  first_name: String,
  last_name: String,
  phone: Number,
  email: String,
  facebook_url: String,
  grad_year: Number,
  date_created: Date,
  referral: String,
  school_name: String,
  school_city: String,
  school_state: String,
  school_region: String,
  home_city: String,
  home_state: String,
  home_region: String
  });

module.exports = mongoose.model('Student', student);