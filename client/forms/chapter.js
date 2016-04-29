var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var CheckboxView = require('ampersand-checkbox-view');

var ChapterInfoInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var PresidentInfoInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var FreeSpeechInfoInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input class="form-input btn-block">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var CheckboxInput = [
        '<div class="form-group">',
            '<span class="form-label" data-hook="label"></span>',
            '<input type="checkbox">',
            '<div data-hook="message-container" class="message message-below message-error">',
                '<p data-hook="message-text"></p>',
            '</div>',
        '</div>'
    ].join('');

var HiddenInput = [
        '<div class="form-group hidden">',
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
                label: 'School Name',
                name: 'school_name',
                value: this.model && this.model.school_name,
                required: false,
                placeholder: 'School Name',
                parent: this,
                template: HiddenInput
            }),
            new InputView({
                label: 'City',
                name: 'city',
                value: this.model && this.model.city,
                required: false,
                placeholder: 'City',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'State',
                name: 'state',
                value: this.model && this.model.state,
                required: false,
                placeholder: 'State',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'Region',
                name: 'region',
                value: this.model && this.model.region,
                required: false,
                placeholder: 'Region',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'Tier',
                name: 'tier',
                value: this.model && this.model.tier,
                required: false,
                placeholder: 'Tier',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'Status',
                name: 'status',
                value: this.model && this.model.status,
                required: false,
                placeholder: 'Status',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'Referral',
                name: 'referral',
                value: this.model && this.model.referral,
                required: false,
                placeholder: 'Referral',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'State Chair Assigned',
                name: 'state_chair_assigned',
                value: this.model && this.model.state_chair_assigned,
                required: false,
                placeholder: 'State Chair Assigned',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'Chapter Facebook Url',
                name: 'chapter_facebook_url',
                value: this.model && this.model.chapter_facebook_url,
                required: false,
                placeholder: 'Chapter Facebook Url',
                parent: this,
                template: ChapterInfoInput
            }),
            new InputView({
                label: 'President First Name',
                name: 'president.first_name',
                value: this.model && this.model.president.first_name,
                required: false,
                placeholder: 'President First Name',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'President Last Name',
                name: 'president.last_name',
                value: this.model && this.model.president.last_name,
                required: false,
                placeholder: 'President Last Name',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'President Email',
                name: 'president.email',
                value: this.model && this.model.president.email,
                required: false,
                placeholder: 'President Email',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'President Phone Number',
                name: 'president.phone',
                value: this.model && this.model.president.phone,
                required: false,
                placeholder: 'President Phone Number',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'Street 1',
                name: 'president.street_1',
                value: this.model && this.model.president.street_1,
                required: false,
                placeholder: 'Street 1',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'Street 2',
                name: 'president.street_2',
                value: this.model && this.model.president.street_2,
                required: false,
                placeholder: 'Street 2',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'City',
                name: 'president.city',
                value: this.model && this.model.president.city,
                required: false,
                placeholder: 'City',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'State',
                name: 'president.state',
                value: this.model && this.model.president.state,
                required: false,
                placeholder: 'State',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'Zipcode',
                name: 'president.zipcode',
                value: this.model && this.model.president.zipcode,
                required: false,
                placeholder: 'Zipcode',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'Facebook Url',
                name: 'president.facebook_url',
                value: this.model && this.model.president.facebook_url,
                required: false,
                placeholder: 'Facebook Url',
                parent: this,
                template: PresidentInfoInput
            }),
            new InputView({
                label: 'Free Speech Rating',
                name: 'free_speech.rating',
                value: this.model && this.model.free_speech.rating,
                required: false,
                placeholder: 'Free Speech Rating',
                parent: this,
                template: FreeSpeechInfoInput
            }),
            new CheckboxView({
                label: 'Free Speech Zone',
                name: 'free_speech.zone',
                value: this.model && this.model.free_speech.zone,
                parent: this,
                template: CheckboxInput
            }),
            new CheckboxView({
                label: 'Free Speech Target',
                name: 'free_speech.target',
                value: this.model && this.model.free_speech.target,
                parent: this,
                template: CheckboxInput
            }),
            new InputView({
                label: 'Free Speech Status',
                name: 'free_speech.status',
                value: this.model && this.model.free_speech.status,
                required: false,
                placeholder: 'Free Speech Status',
                parent: this,
                template: FreeSpeechInfoInput
            })
        ];
    }
});