var View = require('ampersand-view');
var note_bindings = require('../../bindings/_note');
var NoteForm = require('../../forms/note');
var NoteModel = require('../../models/note');
var ModalView = require('ampersand-modal-view');
var ChapterView = require('./chapter');


module.exports = View.extend({
  template: require('../../templates/partials/note.hbs'),
  bindings: note_bindings,
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick',
    'click [data-hook=action-edit]': 'handleEditClick'
  },
  // handleEditClick: function() {
  //   this.renderSubview(new NoteForm({
  //         el: this.el,
  //         model: new NoteModel(),
  //         parent: this,
  //         submitCallback: function(obj){
  //           this.parent.notes.url = '/api/notes';
  //           this.model = new NoteModel();
  //           this.model.user = window.me._id;
  //           this.model.parent = {};
  //           this.model.parent.item = this.parent.model._id;
  //           this.model.parent.kind = 'Chapter';
  //           this.model.message = obj.message;
  //           this.parent.notes.create(this.model);
  //         }
  //       }), this.queryByHook("message"));
  //   this.queryByHook("action-edit").
  // },
  handleRemoveClick: function () {
    var deleteKey = prompt('Please type in your last name to confirm note deletion.', '');
    if(deleteKey == window.me.last_name){
      this.model.destroy();
      return false;
    }
    return false;
  }
});
