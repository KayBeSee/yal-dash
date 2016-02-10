// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    _id: ['string'],
    user_id: ['string'],
    parent_id: ['string'],
    parent_type: ['string'],
    date_created: ['date'],
    date_modified: ['date'],
    message: ['string']
  }
});