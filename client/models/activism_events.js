var AmpCollection = require('ampersand-rest-collection');
var activism_event = require('./activism_event');


module.exports = AmpCollection.extend({
    model: activism_event,
    url: '/api/activism'
});