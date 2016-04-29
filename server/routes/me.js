var config = require('../../config.js');
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var LocalStrategy = require('passport-local').Strategy;
var User = require('../models/user');

module.exports = function(app) {
  // ---------------------------------------------------
  // Login Functionality
  // ---------------------------------------------------
  app.use(passport.initialize());
  app.use(passport.session());

  passport.serializeUser(function(user, done) {
    done(null, user._id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

  passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'passwd'
  },
    function(username, password, done) {
      User.findOne({ email: username }, function(err, user) {
        if (err) { return done(err); }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!(user.password = password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
    }
  ));

  app.get('/authenticate', function (req, res){
    if(req.session.passport.user) {
      User.findById(req.session.passport.user, function (err, user) {
        if(err) return res.json(err);
        return res.json(user);
      });
    }
    else {
      res.json({error: 'User not logged in.'});
    }
  });

  app.post('/authenticate', passport.authenticate('local'), function (req, res){
    req.session.passport.user = req.user;
    res.send(req.session.passport.user);
  });

  passport.use('facebook', new FacebookStrategy({
    clientID        : config.facebook_api_key,
    clientSecret    : config.facebook_api_secret,
    callbackURL     : config.facebook_callback_url,
    profileFields   : ['id', 'photos', 'emails', 'profileUrl', 'last_name', 'first_name', 'locale']
  },
    function(access_token, refresh_token, profile, done) {
      process.nextTick(function() {
        User.findOne({ 'facebook_id' : profile.id }, function(err, user) {
          if (err)
            return done(err);
            if (!err && user != null) {
              console.log('User ' + user._id + ' signed in');
              done(null, user);
            } else {
              var newUser = new User();
              console.log(profile);
              newUser.facebook_id = profile.id;
              newUser.fb_access_token = access_token;
              newUser.facebook_url = profile.profileUrl;
              newUser.picture_url = profile.photos[0].value;

              done(null, newUser);

              // User.create( newUser, function (err, newUser) {
              //   if (err) done(err, null);
              //   console.log('User ' + newUser._id + ' created');
              //   done(null, newUser);
              // });
           }
        });
      });
  }));

  app.get('/login/facebook', passport.authenticate('facebook'), function (req, res){
    res.send(req.user);
  });

  app.get('/login/facebook/callback',
    passport.authenticate('facebook', {
      successRedirect : '/chapters',
      failureRedirect : '/error'
    })
  );

  app.get('/logout', function (req, res){
    req.session.destroy();
    res.redirect('/');
  });

}