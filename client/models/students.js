var AmpCollection = require('ampersand-rest-collection');
var student = require('./student');


module.exports = AmpCollection.extend({
    model: student,
    url: '/api/students'
});