var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');

var HiddenInput = [
        '<div class="form-group invisible">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var FormattedInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'First Name',
                name: 'first_name',
                value: this.model && this.model.first_name,
                required: false,
                placeholder: 'First Name',
                parent: this,
                template: FormattedInput
            }),
            new InputView({
                label: 'Last Name',
                name: 'last_name',
                value: this.model && this.model.last_name,
                required: false,
                placeholder: 'Last Name',
                parent: this,
                template: FormattedInput
            }),
            new InputView({
                label: 'Phone',
                name: 'phone',
                value: this.model && this.model.phone,
                required: false,
                placeholder: 'Phone',
                parent: this,
                template: FormattedInput,
                type: 'number'
            }),
            new InputView({
                label: 'Email',
                name: 'email',
                value: this.model && this.model.email,
                required: false,
                placeholder: 'Email',
                parent: this,
                template: FormattedInput
            }),
            new InputView({
                label: 'Region',
                name: 'region',
                value: this.model && this.model.region,
                required: false,
                placeholder: 'Region',
                parent: this,
                template: FormattedInput
            }),
            new InputView({
                label: 'Role',
                name: 'role',
                value: this.model && this.model.role,
                required: false,
                placeholder: 'Role',
                parent: this,
                template: FormattedInput
            })
        ];
    }
});