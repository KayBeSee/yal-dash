/* global app, alert */
var PageView = require('./base');

module.exports = PageView.extend({
  pageTitle: 'view person',
  template: require('../templates/pages/chapter.hbs'),
  bindings: {
    'model.school_name': ['data-hook=school_namae'],
    'model.city': ['data-hook=city'],
    'model.state': ['data-hook=state'],
    'model.editUrl': {
      type: 'attribute',
      hook: 'edit',
      name: 'href'
    }
  },
  events: {
    'click [data-hook~=delete]': 'handleDeleteClick'
  },
  initialize: function (spec) {
    var self = this;
    app.chapters.getOrFetch(spec.id, {all: true}, function (err, model) {
      if (err) alert('couldnt find a model with id: ' + spec.id);
      self.model = model;
    });
  },
  handleDeleteClick: function () {
    this.model.destroy({success: function () {
      app.navigate('collections');
    }});
  }
});
