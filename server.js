var path         = require('path');

var bodyParser   = require('body-parser');
var compress     = require('compression');
var cookieParser = require('cookie-parser');
var config       = require('getconfig');
var express      = require('express');
var helmet       = require('helmet');
var Moonboots    = require('moonboots-express');
var semiStatic   = require('semi-static');
var serveStatic  = require('serve-static');
var stylizer     = require('stylizer');

var mongoose     = require('mongoose');

var app          = express();

// a little helper for fixing paths for various environments
var fixPath = function (pathString) {
  return path.resolve(path.normalize(pathString));
};

// -----------------
// Configure express
// -----------------
app.use(compress());
app.use(serveStatic(fixPath('public')));

// we only want to expose tests in dev
if (config.isDev) {
  app.use(serveStatic(fixPath('test/assets')));
  app.use(serveStatic(fixPath('test/spacemonkey')));
}

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.post('/api/poop', function (req, res) {
  console.log('req', req);
  res.send('nice');
});

// in order to test this with spacemonkey we need frames
if (!config.isDev) {
  app.use(helmet.xframe());
}
app.use(helmet.xssFilter());
app.use(helmet.nosniff());

app.set('view engine', 'jade');


// -----------------
// Enable the functional test site in development
// -----------------
if (config.isDev) {
  app.get('/test*', semiStatic({
    folderPath: fixPath('test'),
    root: '/test'
  }));
}


// -----------------
// Set our client config cookie
// -----------------
app.use(function (req, res, next) {
  res.cookie('config', JSON.stringify(config.client));
  next();
});

mongoose.connect(config.mongo.url);


require('./server/routes')(app);


// ---------------------------------------------------
// Configure Moonboots to serve our client application
// ---------------------------------------------------
new Moonboots({
  moonboots: {
    jsFileName: 'ampersand-test-app',
    cssFileName: 'ampersand-test-app',
    main: fixPath('client/app.js'),
    developmentMode: config.isDev,
    libraries: [],
    stylesheets: [
      fixPath('public/css/bootstrap.css'),
      fixPath('public/css/app.css')
    ],
    browserify: {
      debug: false,
      transforms: ['browserify-handlebars']
    },
    beforeBuildCSS: function (done) {
      // This re-builds css from stylus each time the app's main css file is
      // requested. Which means you can seamlessly change stylus files and see
      // new styles on refresh.
      if (config.isDev) {
        stylizer({
          infile: fixPath('public/css/app.styl'),
          outfile: fixPath('public/css/app.css'),
          development: true
        }, done);
      } else {
        done();
      }
    }
  },
  server: app
});


// listen for incoming http requests on the port as specified in our config
app.listen(config.http.port, function(){
  console.log('Application running on port ' + config.http.port);
});
