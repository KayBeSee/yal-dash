var PageView   = require('./base');
var ChapterView = require('./partials/chapter');

module.exports = PageView.extend({
  pageTitle: 'Chapters',
  template: require('../templates/pages/chapters.hbs'),
  events: {

  },
  render: function () {
    this.renderWithTemplate();
    this.renderCollection(this.collection, ChapterView, this.queryByHook('chapter-list'));
    if (!this.collection.length) {
      this.fetchCollection();
    }
  },
  fetchCollection: function () {
    this.collection.fetch();
    return false;
  },
});
