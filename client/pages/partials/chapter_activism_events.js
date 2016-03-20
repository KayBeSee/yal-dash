var PageView   = require('../base');           // grab base page view
var ActivismEventView = require('./chapter_activism_event');  // grab user view

module.exports = PageView.extend({
  template: require('../../templates/partials/chapter_activism_events.hbs'),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.renderWithTemplate();
    this.renderCollection(
      this.collection,
      ActivismEventView,
      this.queryByHook('activism_event-list'),
      { parent: this }
    );
    return this;
  }
});
