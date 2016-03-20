var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var SelectView = require('ampersand-select-view');


module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Chapter Id',
                name: 'chapter',
                value: this.model && this.model.chapter._id,
                required: false,
                placeholder: 'Chapter Id',
                parent: this
            }),
            new InputView({
                label: 'Date Executed',
                name: 'date_executed',
                value: this.model && this.model.date_executed,
                required: false,
                placeholder: 'Date Executed',
                parent: this
            }),
            new SelectView({
                label: 'Type',
                name: 'type',
                value: this.model && this.model.type,
                options: ['Constitution', 'War', 'Incarceration', 'Debt', 'Civil Liberties'],
                unselectedText: 'Choose One',
                required: false,
                placeholder: 'Type',
                parent: this
            }),
            new SelectView({
                label: 'Status',
                name: 'status',
                value: this.model && this.model.status,
                options: ['Applied', 'Executed', 'Completed'],
                unselectedText: 'Choose One',
                required: false,
                placeholder: 'Status',
                parent: this
            }),
            new InputView({
                label: 'Blog Post Url',
                name: 'blog_post_url',
                value: this.model && this.model.blog_post_url,
                required: false,
                placeholder: 'Blog Post Url',
                parent: this
            })
        ];
    }
});