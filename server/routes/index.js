module.exports = function(app) {
  require('./chapter')(app);
  require('./activism_event')(app);
  require('./note')(app);
  require('./user')(app);
  require('./student')(app);
}