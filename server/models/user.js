var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var user = new Schema({
  email: String,
  password: String,
  facebook_id: String,
  facebook_access_token: String,
  first_name: String,
  last_name: String,
  phone: Number,
  facebook_url: String,
  date_created: Date,
  picture_url: String,
  region: String,
  role: String
});

module.exports = mongoose.model('User', user);