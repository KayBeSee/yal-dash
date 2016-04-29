/* global app, alert */
var PageView = require('./base');
var Collection = require('ampersand-rest-collection');
var activism_event_bindings = require('../bindings/_activism_event');
var NotesView = require('./partials/notes');
var NoteForm = require('../forms/note');
var NoteModel = require('../models/note');
var Notes = require('../models/notes');
var ActivismEvents = require('../models/activism_events');
var ActivismEventView = require('./partials/activism_events');

module.exports = PageView.extend({
  pageTitle: 'view activism event',
  template: require('../templates/pages/activism_event.hbs'),
  bindings: activism_event_bindings,
  events: {
    'click [data-hook~=delete]': 'handleDeleteClick',
    'click [data-hook=action-view-chapter]': 'viewChapter'
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
            console.log('obj', obj);
            this.parent.notes.url = '/api/notes';
            this.model = new NoteModel();
            this.model.user = window.me._id;
            this.model.parent = {};
            this.model.parent.item = this.parent.model._id;
            this.model.parent.kind = 'Activism_Event';
            this.model.message = obj.message;
            this.parent.notes.create(this.model);
            console.log('this.model', this.model);
            app.router.reload();
          }
        });
      },

    }
  },
  initialize: function (spec) {
    var self = this;
    self.notes = new Notes();
    app.activism_events.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
      self.notes.url = '/api/notes/activism_event/' + spec.id;
      self.notes.fetch();
      self.notes.url = '/api/notes';
    });
  },
  viewChapter: function () {
    app.navigate('chapters/' + this.model.chapter._id);
  },
  handleDeleteClick: function () {
    this.model.destroy({success: function () {
      app.reload();
    }});
  }
});
