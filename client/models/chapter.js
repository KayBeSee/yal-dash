// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  idAttribute: '_id',
  props: {
    _id: ['string'],
    school_name: ['string'],
    city: ['string'],
    state: ['string'],
    region: ['string'],
    status: ['string'],
    tier: ['string'],
    date_created: ['date'],
    date_modified: ['date'],
    reply_date: ['date'],
    referral: ['string'],
    state_chair_assigned: ['string'],
    chapter_facebook_url: ['string'],
    president: {
      first_name: ['string'],
      last_name: ['string'],
      email: ['string'],
      phone: ['number'],
      street_1: ['string'],
      street_2: ['string'],
      city: ['string'],
      state: ['string'],
      zipcode: ['string'],
      facebook_url: ['string']
    },
    free_speech: {
      rating: ['string'],
      zone: ['boolean'],
      target: ['boolean'],
      status: ['string']
    }
  },
  derived: {
   viewUrl: {
      deps: ['id'],
      fn: function () {
          return '/chapters/' + this._id;
      }
    },
    editUrl: {
      deps: ['id'],
      fn: function () {
          return '/chapters/' + this._id + '/edit';
      }
    }
  }
});