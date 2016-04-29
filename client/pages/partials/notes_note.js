var View = require('ampersand-view');
var note_bindings = require('../../bindings/_note');

module.exports = View.extend({
  template: require('../../templates/partials/notes_note.hbs'),
  bindings: note_bindings,
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick',
    'click [data-hook=action-edit]': 'handleEditClick'
  },
  initialize: function () {
  },
  handleEditClick: function() {

  },
  handleRemoveClick: function () {
    this.model.destroy();
    return false;
  }
});
