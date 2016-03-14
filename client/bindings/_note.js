module.exports = {
  'model._id': {
    hook: '_id'
  },
  'model.user_id': {
    hook: 'user_id'
  },
  'model.parent_id': {
    hook: 'parent_id'
  },
  'model.parent_type': {
    hook: 'parent_type'
  },
  'model.date_created': {
    hook: 'date_created'
  },
  'model.date_modified': {
    hook: 'date_modified'
  },
  'model.message': {
    hook: 'message'
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