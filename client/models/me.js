var AmpersandModel = require('ampersand-model');


module.exports = AmpersandModel.extend({
  idAttribute: '_id',
  url: '/authenticate',
  type: 'user',
  props: {
    _id: ['string'],
    email: ['string'],
    password: ['string'],
    facebook_id: ['string'],
    facebook_access_token: ['string'],
    first_name: ['string'],
    last_name: ['string'],
    phone: ['number'],
    facebook_url: ['string'],
    date_created: ['date'],
    picture_url: ['string'],
    region: ['string'],
    role: ['string']
  },
  derived: {
   editUrl: {
      deps: ['_id'],
      fn: function () {
        return '/users/' + this._id + '/edit' ;
      }
    }
  }
});
