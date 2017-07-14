const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

const controller = {};

controller.create = (req, res, next) => {
  console.log(req.body)
  User.findByUserName(req.body.username)
  .then((result) => {
    if (result){
      res.json({'message': 'User already exists'});
    } else {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);

    User.create({
      username: req.body.username,
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: hash,
      admin: false,
    })
      .then(user => {
        req.login(user, err => {
          if (err) return next(err);
          res.json({message: 'ok', user: user});
        });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
  });
};

module.exports = controller;