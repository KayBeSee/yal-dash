/* global app, alert */
var PageView = require('./base');
var ActivismEventForm = require('../forms/activism_event');

module.exports = PageView.extend({
  pageTitle: 'edit activism event',
  template: require('../templates/pages/activism_event-edit.hbs'),
  initialize: function (spec) {
    var self = this;
    app.activism_events.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
    });
  },
  subviews: {
    form: {
      // this is the css selector that will be the `el` in the
      // prepareView function.
      container: 'form',
      // this says we'll wait for `this.model` to be truthy.
      waitFor: 'model',
      prepareView: function (el) {
        var model = this.model;
        return new ActivismEventForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            model.save(data, {
              wait: true,
              success: function () {
                app.navigate('/activism_events');
              }
            });
          }
        });
      }
    }
  }
});
