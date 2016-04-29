var AmpCollection = require('ampersand-rest-collection');
var user = require('./user');


module.exports = AmpCollection.extend({
    mainIndex: '_id',
    model: user,
    url: '/api/users'
});