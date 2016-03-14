/*global app*/
var PageView = require('./base');
var ActivismEventForm = require('../forms/activism_event');
var ActivismEventModel = require('../models/activism_event');

module.exports = PageView.extend({
  pageTitle: 'add activism event',
  template: require('../templates/pages/activism_event-add.hbs'),
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new ActivismEventForm({
          el: el,
          submitCallback: function (data) {
            app.activism_events.create(data, {
              wait: true,
              success: function () {
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
