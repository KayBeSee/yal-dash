var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var NoteModel = require('../models/note');


module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Message',
                name: 'message',
                value: this.model && this.model.message,
                required: false,
                placeholder: 'Add a note',
                parent: this,
                template: '<textarea type="text" class="btn-block form-control" rows="5"></textarea>'
            })
        ];
    }
});