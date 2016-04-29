module.exports = {
  'model._id': {
    hook: '_id'
  },
  'model.facebook_id':{
    hook: 'facebook_id'
  },
  'model.first_name':{
    hook: 'first_name'
  },
  'model.last_name':{
    hook: 'last_name'
  },
  'model.phone':{
    hook: 'phone'
  },
  'model.email':{
    hook: 'email'
  },
  'model.facebook_url':{
    hook: 'facebook_url'
  },
  'model.date_created':{
    hook: 'date_created'
  },
  'model.picture_url':{
    hook: 'picture_url'
  },
  'model.region':{
    hook: 'region'
  },
  'model.role':{
    hook: 'role'
  },
  'model.facebook_url': {
    type: 'attribute',
    hook: 'action-view-fb',
    name: 'href'
  },
  'model.name': {
    hook: 'name'
  },
  'model.picture_url': {
    type: 'attribute',
    name: 'src',
    hook: 'picture_url'
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