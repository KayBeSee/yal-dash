var AmpCollection = require('ampersand-rest-collection');
var note = require('./note');


module.exports = AmpCollection.extend({
    model: note,
    url: '/api/notes'
});