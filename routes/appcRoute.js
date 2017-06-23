const express = require('express');
const controller = require('../controllers/appcController');

const appcRoute = express.Router();
const gameRoute = require('../routes/gameRoute');
const adminRoute = require('../routes/adminRoute');

appcRoute.use('/game', gameRoute);

appcRoute.get('/stats', controller.displayStats);

appcRoute.use('/admin', adminRoute);

appcRoute.get('/', controller.loggedIn);

// other routes: stats, profile, ?

module.exports = appcRoute;