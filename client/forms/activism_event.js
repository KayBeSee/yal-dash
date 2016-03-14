var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');


module.exports = FormView.extend({
    fields: function () {
        return [
            new InputView({
                label: 'Id',
                name: '_id',
                value: this.model && this.model._id,
                required: false,
                placeholder: 'Id',
                parent: this
            }),
            new InputView({
                label: 'Chapter Id',
                name: 'chapter_id',
                value: this.model && this.model.chapter_id,
                required: false,
                placeholder: 'Chapter Id',
                parent: this
            }),
            new InputView({
                label: 'Type',
                name: 'type',
                value: this.model && this.model.type,
                required: false,
                placeholder: 'Type',
                parent: this
            }),
            new InputView({
                label: 'Status',
                name: 'status',
                value: this.model && this.model.status,
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