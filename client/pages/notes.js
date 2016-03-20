var PageView   = require('./base');
var NoteView = require('./partials/notes_note');

module.exports = PageView.extend({
  pageTitle: 'Notes',
  template: require('../templates/pages/notes.hbs'),
  events: {

  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, NoteView, this.queryByHook('note-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
});
