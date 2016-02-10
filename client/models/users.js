var AmpCollection = require('ampersand-rest-collection');
var user = require('./user');


module.exports = AmpCollection.extend({
    model: user,
    url: '/api/users'
});