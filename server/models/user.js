var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({
  first_name: String,
  last_name: String,
  phone: Number,
  email: String,
  facebook_url: String,
  date_created: Date,
  picture_url: String,
  region: String,
  role: String
  });

module.exports = mongoose.model('User', user);