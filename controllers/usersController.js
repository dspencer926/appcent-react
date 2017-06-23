const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const controller = {};

controller.create = (req, res, next) => {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);

  User.create({
    username: req.body.username,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    password: hash,
    admin: false,
  })
    .then(user => {
      req.login(user, err => {
        if (err) return next(err);
        res.redirect('/appc')
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

module.exports = controller;