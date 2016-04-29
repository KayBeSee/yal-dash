/*global app*/
var PageView = require('./base');
var LoginForm = require('../forms/login');
// var ActivismEventModel = require('../models/activism_event');

module.exports = PageView.extend({
  pageTitle: 'login',
  template: require('../templates/pages/login.hbs'),
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new LoginForm({
          el: el,
          submitCallback: function (data) {
            window.me.save(data, {
              wait: true,
              success: function () {
                app.navigate('/notes');
              }
            });
          }
        });
      }
    }
  },
  initialize: function() {
    var self = this;
    // this.model = new ActivismEventModel();
  }
});
