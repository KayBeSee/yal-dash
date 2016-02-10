var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var activism_event_schema = new Schema({
  chapter_id: ObjectId,
  date_created: Date,
  date_modified: Date,
  type: String,
  status: String,
  blog_post_url: String
});

module.exports = mongoose.model('Activism Event', activism_event_schema);