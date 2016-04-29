/* global app, alert */
var PageView = require('./base');
var AmpersandRestCollection = require('ampersand-rest-collection');
var Collection = AmpersandRestCollection.extend({
    url: '/login/facebook',
    ajaxConfig: function (params) {
        return {
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            xhrFields: {
                withCredentials: true
            }
        };
    }
});
var user_bindings = require('../bindings/_user');
var NotesView = require('./partials/notes');
var Notes = require('../models/notes');

module.exports = PageView.extend({
  pageTitle: 'view user',
  template: require('../templates/pages/user.hbs'),
  bindings: user_bindings,
  events: {
    'click [data-hook~=grabFacebook]': 'clickFacebook'
  },

  subviews: {
    Notes: {
      container: '[data-hook=notes]',
      waitFor: this.model,
      prepareView: function(el) {
        return new NotesView({
          el         : el,
          parent     : this,
          collection : this.notes
        });
      }
    }
  },

  initialize: function (spec) {
    var self = this;
    self.notes = new Notes();
    app.users.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
      // Switch notes url in order to fetch by chapter.
      self.notes.url = '/api/notes/users/' + spec.id;
      self.notes.fetch();
    });
  },

  clickFacebook: function () {
    self.facebook = new Collection();
    // self.facebook.url = '/login/facebook';
    self.facebook.fetch({ success: function(collection, response, options){
      console.log('collection: ', collection);
      console.log('response: ', response);
      console.log('options: ', options);
    }});
  }
});
