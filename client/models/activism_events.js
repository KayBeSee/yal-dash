var AmpCollection = require('ampersand-rest-collection');
var activism_event = require('./activism_event');


module.exports = AmpCollection.extend({
  mainIndex: '_id',
  model: activism_event,
  url: '/api/activism'
});