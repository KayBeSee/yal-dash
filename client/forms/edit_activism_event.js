var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var SelectView = require('ampersand-select-view');
var AutoCompleteView = require('../../kbc_autocomplete-view');
var Chapters = require('../models/chapters');

var TextInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var SelectInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<select></select>',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Date Executed',
                name: 'date_executed',
                value: this.model && this.model.date_executed,
                required: false,
                placeholder: 'Date Executed',
                parent: this,
                template: TextInput
            }),
            new SelectView({
                label: 'Type',
                name: 'type',
                value: this.model && this.model.type,
                options: ['Constitution', 'War', 'Incarceration', 'Debt', 'Civil Liberties'],
                unselectedText: 'Choose One',
                required: false,
                placeholder: 'Type',
                parent: this,
                template: SelectInput
            }),
            new SelectView({
                label: 'Status',
                name: 'status',
                value: this.model && this.model.status,
                options: ['Applied', 'Executed', 'Completed'],
                unselectedText: 'Choose One',
                required: false,
                placeholder: 'Status',
                parent: this,
                template: SelectInput
            }),
            new InputView({
                label: 'Blog Post Url',
                name: 'blog_post_url',
                value: this.model && this.model.blog_post_url,
                required: false,
                placeholder: 'Blog Post Url',
                parent: this,
                template: TextInput
            })
        ];
    }
});