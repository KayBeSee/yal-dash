var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var changelog_schema = new Schema({
  parent_id: String,
  field_changed: String,
  old_value: String,
  new_value: String,
  user_id: String,
  date: Date,
  type: String
  });

module.exports = mongoose.model('Changelog', changelog_schema);