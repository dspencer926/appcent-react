const db = require('../db/config');

const User = {};

User.findByUserName = userName => {
  return db.oneOrNone('SELECT * FROM users WHERE username = $1', [userName]);
};

User.create = user => {
  return db.one(
    `
      INSERT INTO users
      (username, first_name, last_name, email, password, admin)
      VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
      INSERT INTO stats 
      (user_ id, iy_ct, iy_total, iy_sym, ɪ_ct, ɪ_total, ɪ_sym, ey_ct, ey_total, ey_sym, ɛ_ct, ɛ_total, ɛ_sym, æ_ct, æ_total, æ_sym, ɑ_ct, ɑ_total, ɑ_sym, ʊ_ct, ʊ_total, ʊ_sym, ɔ_ct, ɔ_total, ɔ_sym, ou_ct, ou_total, ou_sym, uw_ct, uw_total, uw_sym, ə_ct, ə_total, ə_sym)
      VALUES

    `,
    [user.username, user.first_name, user.last_name, user.email, user.password, user.admin]
  );
};

module.exports = User;