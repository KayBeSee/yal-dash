var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var NoteModel = require('../models/note');

var UsernameInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block form-control">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var PasswordInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input type="password" class="form-input form-control btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Email Address',
                name: 'email',
                value: this.model && this.model.username,
                required: false,
                placeholder: 'Email Address',
                parent: this,
                template: UsernameInput
            }),
            new InputView({
                label: 'Password',
                name: 'passwd',
                value: this.model && this.model.password,
                required: false,
                placeholder: 'Password',
                parent: this,
                type: 'password',
                template: PasswordInput
            }),
        ];
    }
});