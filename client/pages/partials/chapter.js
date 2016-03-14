var View = require('ampersand-view');
var chapter_bindings = require('../../bindings/_chapter');

module.exports = View.extend({
  template: require('../../templates/partials/chapter.hbs'),
  bindings: chapter_bindings,
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick'
  },
  handleRemoveClick: function () {
    this.model.destroy();
    return false;
  }
});
