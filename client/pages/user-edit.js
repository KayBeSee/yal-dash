/* global app, alert */
var PageView = require('./base');
var UserForm = require('../forms/user');

module.exports = PageView.extend({
  pageTitle: 'edit user',
  template: require('../templates/pages/user-edit.hbs'),
  events: {
    'click [data-hook=action-delete]': 'handleDeleteClick'
  },
  initialize: function (spec) {
    var self = this;
    app.users.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
    });
  },
  handleDeleteClick: function () {
    var deleteKey = prompt('Please type in your last name to confirm user deletion.', '');
    if(deleteKey == window.me.last_name){
      this.model.destroy({success: function () {
        app.navigate('users');
      }});
      return false;
    }
    return false;
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
        return new UserForm({
          el: el,
          model: this.model,
          submitCallback: function (data) {
            model.save(data, {
              wait: true,
              success: function () {
                app.users.fetch();
                app.navigate('/users');
              }
            });
          }
        });
      }
    }
  }
});
