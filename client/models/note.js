// chapter Model - chapter.js
var AmpModel = require('ampersand-model');
var Moment = require('moment');

module.exports = AmpModel.extend({
  idAttribute: '_id',
  props: {
    _id: ['string'],
    user: {
      first_name: 'string',
      last_name: 'string',
      phone: 'number',
      email: 'string',
      facebook_url: 'string',
      date_created: 'date',
      picture_url: 'string',
      region: 'string',
      role: 'string'
    },
    parent: {
      kind: 'string',
      item: 'object'
    },
    date_created: ['date'],
    date_modified: ['date'],
    message: ['string']
  },
  derived: {
   viewUrl: {
      deps: ['id', 'parent'],
      fn: function () {
        if(parent.item){
          if(parent.kind = "Chapter"){
            return '/chapters/' + this.parent.item._id;
          }
          if(parent.kind = "ActivismEvent"){
            return '/activism_events/' + this.parent.item._id;
          }
        }
      }
    },
    editUrl: {
      deps: ['id'],
      fn: function () {
          return '/notes/' + this._id + '/edit';
      }
    },
    prettyDateCreated: {
      deps: ['date_created'],
      fn: function() {
        return Moment(this.date_created).format('LLLL');
      }
    }
  }
});