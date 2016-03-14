// chapter Model - chapter.js
var AmpModel = require('ampersand-model');


module.exports = AmpModel.extend({
  props: {
    _id: ['string'],
    user: ['any'],
    parent: {
      kind: 'string',
      item: 'object'
    },
    date_created: ['date'],
    date_modified: ['date'],
    message: ['string']
  },
  erived: {
   viewUrl: {
      deps: ['id'],
      fn: function () {
          return '/notes/' + this._id;
      }
    },
    editUrl: {
      deps: ['id'],
      fn: function () {
          return '/notes/' + this._id + '/edit';
      }
    }
  }
});