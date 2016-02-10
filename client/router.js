/*global me, app*/
var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var InfoPage = require('./pages/info');
var ChaptersPage = require('./pages/chapters');
var ChapterViewPage = require('./pages/chapter');
var ChapterEditPage = require('./pages/chapter-edit');
var ChapterAddPage = require('./pages/chapter-add');


module.exports = Router.extend({
  routes: {
    ''                          : 'home',
    'info'                      : 'info',
    'chapters'                  : 'chapters',
    'chapters/:id'              : 'chapterView',
    'chapters/:id/edit'         : 'chapterEdit',
    'chapters/add'              : 'chapterAdd',
    // 'activism_events'           : 'activism_events',
    // 'activism_events/:id'       : 'activism_eventView',
    // 'activism_events/:id/edit'  : 'activism_eventEdit',
    // 'activism_events/add'       : 'activism_eventAdd',
    // 'students'                  : 'students',
    // 'students/:id'              : 'studentView',
    // 'students/:id/edit'         : 'studentEdit',
    // 'students/add'              : 'studentAdd',
    // 'users'                     : 'users',
    // 'users/:id'                 : 'userView',
    // 'users/:id/edit'            : 'userEdit',
    // 'users/add'                 : 'userAdd',
    // 'notes'                     : 'notes',
    // 'notes/:id'                 : 'noteView',
    // 'notes/:id/edit'            : 'noteEdit',
    // 'notes/add'                 : 'noteAdd',
    '(*path)'                   : 'catchAll'
  },

  // ------- ROUTE HANDLERS ---------
  home: function () {
    this.trigger('page', new HomePage({
      model: me
    }));
  },

  info: function () {
    this.trigger('page', new InfoPage({
      model: me
    }));
  },

  chapters: function () {
    this.trigger('page', new ChaptersPage({
      model: me,
      collection: app.chapters
    }));
  },

  chapterAdd: function () {
    this.trigger('page', new ChapterAddPage());
  },

  chapterEdit: function (id) {
    this.trigger('page', new ChapterEditPage({
      id: id
    }));
  },

  chapterView: function (id) {
    this.trigger('page', new ChapterViewPage({
      id: id
    }));
  },

  catchAll: function () {
    this.redirectTo('');
  }
});
