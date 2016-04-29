/* global app, alert */
var PageView = require('./base');
var Collection = require('ampersand-rest-collection');
var chapter_bindings = require('../bindings/_chapter');
var NotesView = require('./partials/notes');
var NoteForm = require('../forms/note');
var NoteModel = require('../models/note');
var Notes = require('../models/notes');
var ActivismEvents = require('../models/activism_events');
var ActivismEventView = require('./partials/chapter_activism_events');

module.exports = PageView.extend({
  pageTitle: 'view chapter',
  template: require('../templates/pages/chapter.hbs'),
  bindings: chapter_bindings,
  events: {
    'click [data-hook~=delete]': 'handleDeleteClick'
  },
  subviews: {
    ActivismEvents: {
      container: '[data-hook=activism_events]',
      waitFor: this.model,
      prepareView: function(el) {
        return new ActivismEventView({
          el         : el,
          parent     : this,
          collection : this.activism_events
        });
      }
    },
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
            this.parent.notes.url = '/api/notes';
            this.model = new NoteModel();
            this.model.user = window.me._id;
            this.model.parent = {};
            this.model.parent.item = this.parent.model._id;
            this.model.parent.kind = 'Chapter';
            this.model.message = obj.message;
            this.parent.notes.create(this.model);
            // in order for user and chapter information to populate on submit.
            app.router.reload();
          }
        });
      },

    }
  },
  initialize: function (spec) {
    var self = this;
    self.activism_events = new ActivismEvents();
    self.notes = new Notes();
    app.chapters.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
      // Switch notes url in order to fetch by chapter.
      self.notes.url = '/api/notes/chapter/' + spec.id;
      self.notes.fetch();
      // Switch back to original url so that DELETE, PUT work.
      self.notes.url = '/api/notes';
      self.activism_events.url = '/api/activism/chapter/' + spec.id;
      self.activism_events.fetch();
    });
  },
  handleDeleteClick: function () {
    this.model.destroy({success: function () {
      app.router.reload();
    }});
  }
});
