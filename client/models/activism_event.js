// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    _id: ['string'],
    chapter: {
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
    date_created: ['date'],
    date_modified: ['date'],
    type: ['string'],
    status: ['string'],
    blog_post_url: ['string']
    },
    derived: {
     viewUrl: {
        deps: ['id'],
        fn: function () {
            return '/activism_events/' + this._id;
        }
      },
      editUrl: {
        deps: ['id'],
        fn: function () {
            return '/activism_events/' + this._id + '/edit';
        }
      }
    }
});