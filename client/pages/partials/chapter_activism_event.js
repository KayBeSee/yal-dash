var View = require('ampersand-view');
var activism_event_bindings = require('../../bindings/_activism_event');

module.exports = View.extend({
  template: require('../../templates/partials/chapter_activism_event.hbs'),
  bindings: activism_event_bindings,
});
