var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
var deepPopulate = require('mongoose-deep-populate')(mongoose);


require('./chapter');
require('./user');
require('./activism_event');
require('./student');

var note_schema = new Schema({
  user: {type: ObjectId, ref: 'User'},
  parent: {
    kind: String,
    item: { type: ObjectId, refPath: 'parent.kind' }
  },
  date_created: Date,
  date_modified: Date,
  message: String
  });

module.exports = mongoose.model('Note', note_schema);