module.exports = {
  'model._id': {
    hook: '_id'
  },
  'model.first_name': {
    hook: 'first_name'
  },
  'model.last_name': {
    hook: 'last_name'
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
  },
};