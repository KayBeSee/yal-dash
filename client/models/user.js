// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    first_name: ['string'],
    last_name: ['string'],
    phone: ['number'],
    email: ['string'],
    facebook_url: ['string'],
    date_created: ['date'],
    picture_url: ['string'],
    region: ['string'],
    role: ['string']
  }
});