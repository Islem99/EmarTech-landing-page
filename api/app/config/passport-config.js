const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const db = require("../models");
const User = db.user;

const { FORBIDDEN, PASSSWORD_ERROR } = require("../consts");

const initialize = (passport) => {
  const verify = (email, password, cb) => {
    User.findOne({ where: { email } })
      .then((user) => {
        if (!user) return cb(new Error(FORBIDDEN)); // User not found
        // Compare passwords using bcrypt
        bcrypt.compare(password, user.password, (err, res) => {
          if (err) return cb(err);
          if (!res) {
            return cb(new Error(PASSSWORD_ERROR)); // Password incorrect
          }
          return cb(null, user); // Authentication successful
        });
      })
      .catch((err) => cb(err));
  };

  const serializeUser = (user, cb) => {
    cb(null, user.id);
  };
  const deserializeUser = (id, cb) => {
    User.findOne({ where: { id: id } })
      .then((user) => cb(null, user))
      .catch((err) => cb(err));
  };

  passport.use(new LocalStrategy({ usernameField: "email" }, verify));
  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
};

module.exports = initialize;
