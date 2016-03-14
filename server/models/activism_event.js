var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
require('./chapter');

var activism_event_schema = new Schema({
  chapter: {type: ObjectId, ref: 'Chapter'},
  date_created: Date,
  date_modified: Date,
  type: String,
  status: String,
  blog_post_url: String
});

module.exports = mongoose.model('ActivismEvent', activism_event_schema);