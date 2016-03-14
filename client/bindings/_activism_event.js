module.exports = {
  'model._id': {
    hook: '_id'
  },
  'model.chapter.school_name': {
    hook:'school_name'
  },
  'model.chapter.city': {
    hook:'school_city'
  },
  'model.chapter.state': {
    hook:'school_state'
  },
  'model.chapter.region': {
    hook:'school_region'
  },
  'model.chapter.state_chair_assigned': {
    hook: 'school_state_chair'
  },
  'model.date_created': {
    hook: 'date_created'
  },
  'model.date_modified': {
    hook: 'date_modified'
  },
  'model.type': {
    hook: 'type'
  },
  'model.status': {
    hook: 'status'
  },
  'model.blog_post_url': {
    hook: 'blog_post_url'
  },
  'model.viewUrl': {
    type: 'attribute',
    hook: 'action-view',
    name: 'href'
  },
  'model.editUrl': {
    type: 'attribute',
    hook: 'action-edit',
    name: 'href'
  }
};