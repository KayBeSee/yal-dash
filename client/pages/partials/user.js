var View = require('ampersand-view');
var user_bindings = require('../../bindings/_user');

module.exports = View.extend({
  template: require('../../templates/partials/user.hbs'),
  bindings: user_bindings,
  events: {
    'click [data-hook=action-edit]': 'handleEditClick'
  }
});
