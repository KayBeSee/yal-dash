var View = require('ampersand-view');
var note_bindings = require('../../bindings/_note');
var NoteForm = require('../../forms/note');
var NoteModel = require('../../models/note');
var ChapterView = require('./chapter');


module.exports = View.extend({
  template: require('../../templates/partials/note.hbs'),
  bindings: note_bindings,
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick',
    'click [data-hook=action-edit]': 'handleEditClick'
  },
  handleRemoveClick: function () {
    var deleteKey = prompt('Please type in your last name to confirm note deletion.', '');
    if(deleteKey == window.me.last_name){
      this.model.destroy();
      return false;
    }
    return false;
  }
});
