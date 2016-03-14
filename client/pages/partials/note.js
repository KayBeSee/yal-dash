var View = require('ampersand-view');
var note_bindings = require('../../bindings/_note');

module.exports = View.extend({
  template: require('../../templates/partials/note.hbs'),
  bindings: note_bindings,
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick',
    'click [data-hook=action-edit]': 'handleEditClick'
  },
  handleEditClick: function() {

  },
  handleRemoveClick: function () {
    this.model.destroy();
    return false;
  }
});
