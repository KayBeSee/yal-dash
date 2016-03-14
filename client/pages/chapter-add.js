/*global app*/
var PageView = require('./base');
var ChapterForm = require('../forms/chapter');
var ChapterModel = require('../models/chapter');

module.exports = PageView.extend({
  pageTitle: 'add chapter',
  template: require('../templates/pages/chapter-add.hbs'),
  subviews: {
    form: {
      container: 'form',
      prepareView: function (el) {
        return new ChapterForm({
          el: el,
          submitCallback: function (data) {
            app.chapters.create(data, {
              wait: true,
              success: function () {
                app.navigate('/chapters');
                app.chapters.fetch();
              }
            });
          }
        });
      }
    }
  },
  initialize: function() {
    var self = this;
    this.model = new ChapterModel();
  }
});
