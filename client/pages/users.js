var PageView   = require('./base');
var UserView = require('./partials/user');

module.exports = PageView.extend({
  pageTitle: 'Users',
  template: require('../templates/pages/users.hbs'),
  events: {

  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, UserView, this.queryByHook('user-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
});
