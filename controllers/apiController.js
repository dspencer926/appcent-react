const Appc = require('../models/apiModel.js');  // fix all references and delete
const Api = require('../models/apiModel.js');

const User = require('../models/userModel.js');

const controller = {};



// controller.loggedIn = (req, res) => {        <-- do I need this funciton?
//   if (req.user !== undefined) {
//     res.render('appc/mainScreen', {
//       documentTitle: 'Welcome',
//       username: req.user.username
//     });
//   } else {
//     res.render('appc/notLogged',
//     {documentTitle: 'NO LOGGEEY'});
//   };
// };

controller.getWords = (req, res) => {
  if (req.user !== undefined) {             // <-- 'isLoggedIn' method instead of 'undefined'
  console.log('game controller in');
  Api.getWords() 
  .then(words => {
    res.json({words: words});
    })
    .catch(err => {
      res.status(400).json(err);
    });
  } else {
    res.json({message: 'Not logged in'});
  };
};

// controller.displayStats = (req, res) => {
//   if (req.user !== undefined) {
//   console.log('stats controller in');
//   User.findByUserName(req.user.username)
//   .then(userInfo => {
//     Api.stats(userInfo.id)
//     .then(statResults => {
//       console.log('stats returned:');
//       console.log(statResults)
//       res.render('appc/statDisplay', {
//         documentTitle: 'Stat Display',
//         stats: statResults,
//         username: req.user.username
//       });
//     })
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
// } else {
//     res.render('appc/notLogged',
//     {documentTitle: 'NO LOGGEEY'});
//   };
// };

// controller.displayAdmin = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//     console.log('admin controller in');
//     res.render('appc/adminView', {
//       documentTitle: 'Admin Page',
//       username: req.user.username
//     })
//   } else {
//     res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.displayUsers = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller users page in');
//   Appc.users()
//     .then(userList => {
//       console.log(userList);
//       res.render('appc/userDisplay', {
//         documentTitle: 'User List',
//         users: userList,
//         username: req.user.username
//       });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.show = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   Appc.userFindById(req.params.id)
//     .then(user => {
//       res.render('appc/userSingle', {
//         documentTitle: 'User Single',
//         user: user,
//         username: req.user.username
//       });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.userEdit = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller edit in');
//   Appc.userFindById(req.params.id)
//     .then(user => {
//       console.log(user);
//       res.render('appc/userEdit', {
//         documentTitle: 'User Edit',
//         user: user,
//         username: req.user.username
//       });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.update = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller update in');
//   console.log(`req: ${req.body.username}`)
//   Appc.update({
//     username: req.body.username,
//     first_name: req.body.first_name,
//     last_name: req.body.last_name,
//     email: req.body.email,
//     admin: req.body.admin,
//   }, req.params.id)
//   .then( () => {
//     Appc.users()
//     .then(userList => {
//       res.render('appc/userDisplay', {
//         documentTitle: 'User List',
//         users: userList,
//         username: req.user.username
//       })
//     })
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };


// controller.destroy = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('destroy controller in');
//   Appc.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/appc/admin/users');
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.displayWords = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller words page in');
//   Appc.words()
//     .then(wordList => {
//       res.render('appc/wordDisplay', {
//         documentTitle: 'Word List',
//         words: wordList,
//         username: req.user.username
//       });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.addNewWord = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller addnew In');
//   Appc.addNewWord({
//     word: req.body.word,
//     vowel: req.body.vowel,
//     sound_path: req.body.sound_path
//   })
//     .then (() => {
//       res.redirect('/appc/admin/words');
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//     } else {
//     res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.destroyWord = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('destroy controller in');
//   console.log(`id: ${req.params.id}`)
//   Appc.destroyWord(req.params.id)
//     .then(() => {
//       res.redirect('/appc/admin/words');
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };

// controller.wordEdit = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller edit word in');
//   Appc.wordFindById(req.params.id)
//     .then(word => {
//       res.render('appc/wordEdit', {
//         documentTitle: 'Word Edit',
//         word: word,
//         username: req.user.username
//       });
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };



// controller.updateWord = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('controller update word in');
//   console.log(req.body.word);
//   console.log(req.body.vowel);
//   console.log(req.body.sound_path);
//   Appc.updateWord({
//     word: req.body.word,
//     vowel: req.body.vowel,
//     sound: req.body.sound_path
//   }, req.params.id)
//   .then( () => {
//     Appc.words()
//     .then(wordList => {
//       res.render('appc/wordDisplay', {
//         documentTitle: 'Word List',
//         words: wordList,
//         username: req.user.username
//       })
//     })
//   })
//   .catch(err => {
//     res.status(400).json(err);
//   });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };





// controller.testGet = (req, res) => {
//   if ((req.user !== undefined) && (req.user.username === 'admin')) {
//   console.log('test page in');
//   Appc.words()
//     .then(wordList => {
//       return wordList;
//     })
//   res.redirect('/appc');
//   Appc.words()
//     .then(wordList => {
//       return wordList;
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
//   } else {
//       res.render('appc/noAuth',
//     {documentTitle: 'No Auth'});
//   };
// };







module.exports = controller;