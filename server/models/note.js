var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var note_schema = new Schema({
  user_id: ObjectId,
  parent_id: ObjectId,
  parent_type: String,
  date_created: Date,
  date_modified: Date,
  message: String
  });

module.exports = mongoose.model('Note', note_schema);