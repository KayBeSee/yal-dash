var FormView = require('ampersand-form-view');
var InputView = require('ampersand-input-view');
var CheckboxView = require('ampersand-checkbox-view');


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
                label: 'School Name',
                name: 'schoolName',
                value: this.model && this.model.schoolName,
                required: false,
                placeholder: 'School Name',
                parent: this
            }),
            new InputView({
                label: 'City',
                name: 'city',
                value: this.model && this.model.city,
                required: false,
                placeholder: 'City',
                parent: this
            }),
            new InputView({
                label: 'State',
                name: 'state',
                value: this.model && this.model.state,
                required: false,
                placeholder: 'State',
                parent: this
            }),
            new InputView({
                label: 'Region',
                name: 'region',
                value: this.model && this.model.region,
                required: false,
                placeholder: 'Region',
                parent: this
            }),
            new InputView({
                label: 'Tier',
                name: 'tier',
                value: this.model && this.model.tier,
                required: false,
                placeholder: 'Tier',
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
                label: 'Date Created',
                name: 'date_created',
                value: this.model && this.model.date_created,
                required: false,
                placeholder: 'Date Created',
                parent: this
            }),
            new InputView({
                label: 'Date Modified',
                name: 'date_modified',
                value: this.model && this.model.date_modified,
                required: false,
                placeholder: 'Date Modified',
                parent: this
            }),
            new InputView({
                label: 'Referral',
                name: 'referral',
                value: this.model && this.model.referral,
                required: false,
                placeholder: 'Referral',
                parent: this
            }),
            new InputView({
                label: 'State Chair Assigned',
                name: 'state_chair_assigned',
                value: this.model && this.model.state_chair_assigned,
                required: false,
                placeholder: 'State Chair Assigned',
                parent: this
            }),
            new InputView({
                label: 'Chapter Facebook Url',
                name: 'chapter_facebook_url',
                value: this.model && this.model.chapter_facebook_url,
                required: false,
                placeholder: 'Chapter Facebook Url',
                parent: this
            }),
            new InputView({
                label: 'President First Name',
                name: 'president_first_name',
                value: this.model && this.model.president_first_name,
                required: false,
                placeholder: 'President First Name',
                parent: this
            }),
            new InputView({
                label: 'President Last Name',
                name: 'president_last_name',
                value: this.model && this.model.president_last_name,
                required: false,
                placeholder: 'President Last Name',
                parent: this
            }),
            new InputView({
                label: 'President Email',
                name: 'president_email',
                value: this.model && this.model.president_email,
                required: false,
                placeholder: 'President Email',
                parent: this
            }),
            new InputView({
                label: 'President Phone Number',
                name: 'president_phone_number',
                value: this.model && this.model.president_phone_number,
                required: false,
                placeholder: 'President Phone Number',
                parent: this
            }),
            new InputView({
                label: 'Street 1',
                name: 'street_1',
                value: this.model && this.model.street_1,
                required: false,
                placeholder: 'Street 1',
                parent: this
            }),
            new InputView({
                label: 'Street 2',
                name: 'street_2',
                value: this.model && this.model.street_2,
                required: false,
                placeholder: 'Street 2',
                parent: this
            }),
            new InputView({
                label: 'Zipcode',
                name: 'zipcode',
                value: this.model && this.model.zipcode,
                required: false,
                placeholder: 'Zipcode',
                parent: this
            }),
            new InputView({
                label: 'Free Speech Rating',
                name: 'free_speech_rating',
                value: this.model && this.model.free_speech_rating,
                required: false,
                placeholder: 'Free Speech Rating',
                parent: this
            }),
            new CheckboxView({
                label: 'Free Speech Zone',
                name: 'free_speech_zone',
                value: this.model.free_speech_zone,
                parent: this
            }),
            new CheckboxView({
                label: 'Free Speech Target',
                name: 'free_speech_target',
                value: this.model.free_speech_target,
                parent: this
            }),
            new InputView({
                label: 'Free Speech Status',
                name: 'free_speech_status',
                value: this.model && this.model.free_speech_status,
                required: false,
                placeholder: 'Free Speech Status',
                parent: this
            })
        ];
    }
});