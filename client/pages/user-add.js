/*global app*/
var PageView = require('./base');
var UserForm = require('../forms/user');
var UserModel = require('../models/user');

module.exports = PageView.extend({
  pageTitle: 'add user',
  template: require('../templates/pages/user-add.hbs'),
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new UserForm({
          el: el,
          submitCallback: function (data) {
            app.users.create(data, {
              wait: true,
              success: function () {
                app.navigate('/users');
                app.users.fetch();
              }
            });
          }
        });
      }
    }
  },
  initialize: function() {
    var self = this;
    this.model = new UserModel();
    console.log(this.model);
  }
});
