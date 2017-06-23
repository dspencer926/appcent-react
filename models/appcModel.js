const db = require('../db/config');

const Appc = {};

Appc.newUser = user => {
  console.log('model in');
  return db.one(
  `
    INSERT INTO users
    (username, password, email, native_lang, admin) VALUES ($1, $2, $3, $4, $5) RETURNING *
  `,
  [user.newName, user.Pw, user.newEmail, user.lang, user.admin]
  );
};

Appc.stats = user => {
  console.log('stat model in');
  return db.oneOrNone('SELECT * FROM stats WHERE user_id = $1', [user]);
};

Appc.userFindById = num => {
  console.log('main model in');
  return db.oneOrNone('SELECT * FROM users WHERE id = $1', [num]);
}

Appc.gameStart = () => {
  console.log('game model in');
  return db.query('SELECT * FROM words');
}

Appc.users = () => {
  console.log('admin model in');
  return db.query('SELECT * FROM users');
}

Appc.update = (info,id) => {
  console.log('model update in');
  return db.none(
    `
      UPDATE users SET
      username = $1,
      first_name = $2,
      last_name = $3,
      email = $4,
      admin = $5
      WHERE id = $6
    `,
    [info.username, info.first_name, info.last_name, info.email, info.admin, id]
  );
};

Appc.destroy = id => {
  console.log('model destroy in');
  return db.none(
    `
      DELETE FROM stats
      WHERE user_id = $1;
      DELETE FROM users
      WHERE id = $1
    `,
    [id]
  );
};

Appc.words = () => {
  return db.query('SELECT * FROM words');
}

Appc.addNewWord = word => {
  return db.none(
    ` 
      INSERT INTO words 
      (word, vowel, sound_path) VALUES ($1, $2, $3)
    `,
    [word.word, word.vowel, word.sound_path]
  );
};

Appc.wordFindById = num => {
  console.log('main word model in');
  return db.oneOrNone('SELECT * FROM words WHERE id = $1', [num]);
}

Appc.updateWord = (word, id) => {
  console.log(`id: ${id}`);
  console.log(word.word);
  console.log(word.vowel);
  console.log(word.sound);
  console.log('model word update in');
  return db.none(
    `
      UPDATE words SET
      word = $1,
      vowel = $2,
      sound_path = $3
      WHERE id = $4;
    `,
    [word.word, word.vowel, word.sound, id]
  );
};


Appc.destroyWord = id => {
  console.log('model destroy word in');
  console.log(`id: ${id}`);
  return db.none(
    `
      DELETE FROM words
      WHERE id = $1
    `,
    [id]
  );
};


module.exports = Appc;