var PageView   = require('../base');           // grab base page view
var NoteView = require('./note');  // grab user view

module.exports = PageView.extend({
  template: require('../../templates/partials/notes.hbs'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(
      this.collection,
      NoteView,
      this.queryByHook('note-list'),
      { parent: this,
        reverse: true }
    );
    return this;
  }
});
