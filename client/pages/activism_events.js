var PageView   = require('./base');
var ActivismEventView = require('./partials/activism_event');

module.exports = PageView.extend({
  pageTitle: 'collection demo',
  template: require('../templates/pages/activism_events.hbs'),
  events: {

  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ActivismEventView, this.queryByHook('activism_event-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
});
