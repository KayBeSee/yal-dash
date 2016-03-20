module.exports = {
  'model._id': {
    hook: '_id'
  },
  'model.user.first_name': {
    hook: 'user_first_name'
  },
  'model.user.last_name': {
    hook: 'user_last_name'
  },
  'model.user.phone': {
    hook: 'user_phone'
  },
  'model.user.email': {
    hook: 'user_email'
  },
  'model.user.facebook_url': {
    hook: 'user_facebook_url'
  },
  'model.user.picture_url': {
    type: 'attribute',
    name: 'src',
    hook: 'user_picture_url'
  },

  'model.user.region': {
    hook: 'user_region'
  },
  'model.user.role': {
    hook: 'user_role'
  },
  'model.parent.item.school_name': {
    hook: 'parent_school_name'
  },
  'model.parent.item.state': {
    hook: 'parent_state'
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
  'model.prettyDateCreated': {
    hook: 'prettyDateCreated'
  },
  'model.viewUrl': {
    type: 'attribute',
    hook: 'action-view',
    name: 'href'
  },
  // 'model.editUrl': {
  //   type: 'attribute',
  //   hook: 'action-edit',
  //   name: 'href'
  // },
  'model._id': {
    hook: 'note_identifier',
    type: 'attribute',
    name: 'id'
  },
};