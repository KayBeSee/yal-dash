// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    _id: ['string'],
    chapter_id: ['string'],
    date_created: ['date'],
    date_modified: ['date'],
    type: ['string'],
    status: ['string'],
    blog_post_url: ['string']
    }
});