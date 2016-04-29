// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  idAttribute: '_id',
  props: {
    _id: ['string'],
    facebook_id: ['string'],
    facebook_url: ['string'],
    facebook_access_token: ['string'],
    first_name: ['string'],
    last_name: ['string'],
    phone: ['number'],
    email: ['string'],
    facebook_url: ['string'],
    date_created: ['date'],
    picture_url: ['string'],
    region: ['string'],
    role: ['string']
  },
  derived: {
    viewUrl: {
      deps: ['_id'],
      fn: function () {
        return '/users/' + this._id;
      }
    },
   editUrl: {
      deps: ['_id'],
      fn: function () {
        return '/users/' + this._id + '/edit' ;
      }
    },
    name: {
      deps: ['first_name', 'last_name'],
      fn: function () {
        return this.first_name + ' ' + this.last_name;
      }
    }
  }
});