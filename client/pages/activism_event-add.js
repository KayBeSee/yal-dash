/*global app*/
var PageView = require('./base');
var NewActivismEventForm = require('../forms/new_activism_event');
var ActivismEventModel = require('../models/activism_event');

module.exports = PageView.extend({
  pageTitle: 'add activism event',
  template: require('../templates/pages/activism_event-edit.hbs'),
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new NewActivismEventForm({
          el: el,
          submitCallback: function (data) {
            app.activism_events.create(data, {
              wait: true,
              success: function (model) {
                console.log('model: ', model);
                app.navigate('/activism_events');
                app.activism_events.fetch();
              }
            });
          }
        });
      }
    }
  },
  initialize: function() {
    var self = this;
    this.model = new ActivismEventModel();
  }
});
