const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const User = require('../../models/userModel');
const authHelpers = require('./authHelpers');

const options = {};

init();

passport.use(
  new LocalStrategy(options, (username, password, done) => {
    User.findByUserName(username)
      .then(user => {
        if (!user) {
          return done(null, false, 'noUser');
        }
        if (!authHelpers.comparePass(password, user.password)) {
          return done(null, false, 'noPwd');
        } else {
          return done(null, user);
        }
      })
      .catch(err => {
        return done(err);
      });
  })
);

module.exports = passport;