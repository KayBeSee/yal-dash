// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  idAttribute: '_id',
  props: {
    first_name: ['string'],
    last_name: ['string'],
    phone: ['number'],
    email: ['string'],
    facebook_url: ['string'],
    grad_year: ['number'],
    date_created: ['date'],
    referral: ['string'],
    school_name: ['string'],
    school_city: ['string'],
    school_state: ['string'],
    school_region: ['string'],
    home_city: ['string'],
    home_state: ['string'],
    home_region: ['string']
  }
});