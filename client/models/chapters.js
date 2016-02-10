var AmpCollection = require('ampersand-rest-collection');
var chapter = require('./chapter');


module.exports = AmpCollection.extend({
    mainIndex: '_id',
    model: chapter,
    url: '/api/chapters'
});