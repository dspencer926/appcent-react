const express = require('express');
const controller = require('../controllers/appcController')
const adminRoute = express.Router();

adminRoute.get('/', controller.displayAdmin);

adminRoute.get('/users', controller.displayUsers);

adminRoute.get('/users/edit/:id', controller.userEdit);

adminRoute.get('/users/:id', controller.show);

adminRoute.put('/users/:id', controller.update);

adminRoute.get('/words', controller.displayWords)

adminRoute.get('/words/add', (req, res) => {
  res.render('appc/wordAdd', {
    documentTitle: 'Add a Word!',
    username: req.user.username,
  });
});

adminRoute.post('/words/add', controller.addNewWord);

adminRoute.delete('/users/:id', controller.destroy);

adminRoute.delete('/words/:id', controller.destroyWord);

adminRoute.get('/words/:id', controller.wordEdit);

adminRoute.put('/words/:id', controller.updateWord);


module.exports = adminRoute;