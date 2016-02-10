var View = require('ampersand-view');

module.exports = View.extend({
  template: require('../../templates/includes/chapter.hbs'),
  bindings: {
    'model.school_name': '[data-hook=school_name]',
    'model.state': '[data-hook=state]',
    'model.state_chair': '[data-hook=state_chair]',
    'model.editUrl': {
      type: 'attribute',
      hook: 'action-edit',
      name: 'href'
    },
    'model.viewUrl': {
      type: 'attribute',
      hook: 'school_name',
      name: 'href'
    }
  },
  events: {
    'click [data-hook~=action-delete]': 'handleRemoveClick'
  },
  handleRemoveClick: function () {
    this.model.destroy();
    return false;
  }
});
