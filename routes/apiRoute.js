const express = require('express');
const controller = require('../controllers/apiController');

const apiRoute = express.Router();
// const gameRoute = require('../routes/gameRoute');
// const adminRoute = require('../routes/adminRoute');

// appcRoute.use('/game', gameRoute);

// appcRoute.get('/stats', controller.displayStats);

// appcRoute.use('/admin', adminRoute);

apiRoute.get('/words', controller.getWords);

// // other routes: stats, profile, ?

module.exports = apiRoute;