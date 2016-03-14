/* global app, alert */
var PageView = require('./base');
var Collection = require('ampersand-rest-collection');
var activism_event_bindings = require('../bindings/_activism_event');
var NotesView = require('./partials/notes');
var NoteForm = require('../forms/note');
var NoteModel = require('../models/note');
var ActivismEvents = require('../models/activism_events');
var ActivismEventView = require('./partials/activism_events');

module.exports = PageView.extend({
  pageTitle: 'view activism event',
  template: require('../templates/pages/activism_event.hbs'),
  bindings: activism_event_bindings,
  events: {
    'click [data-hook~=delete]': 'handleDeleteClick'
  },
  subviews: {
    Notes: {
      container: '[data-hook=notes]',
      waitFor: this.model,
      prepareView: function(el) {
        return new NotesView({
          el         : el,
          parent     : this,
          collection : this.collection
        });
      }
    },
    NotesForm: {
      container: '[data-hook=note_form]',
      waitFor: this.model,
      prepareView: function (el) {
        return new NoteForm({
          el: el,
          model: new NoteModel(),
          parent: this,
          submitCallback: function(obj){
            this.parent.collection.url = '/api/notes';
            this.model = new NoteModel();
            this.model.user = window.me._id;
            this.model.parent = {};
            this.model.parent.item = this.parent.model._id;
            this.model.parent.kind = 'ActivismEvent';
            this.model.message = obj.message;
            this.parent.collection.create(this.model);
          }
        });
      },

    }
  },
  initialize: function (spec) {
    var self = this;
    self.collection = new Collection([], {model: NoteModel});
    app.activism_events.getOrFetch(spec.id, {all: true}, function (err, model) {
      console.log('spec.id', spec.id);
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
      self.collection.url = '/api/notes/activism/' + spec.id;
      self.collection.fetch();
    });
  },
  handleDeleteClick: function () {
    this.model.destroy({success: function () {
      app.navigate('activism_events');
    }});
  }
});
