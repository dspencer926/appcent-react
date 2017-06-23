const express = require('express');
const controller = require('../controllers/appcController');

const gameRoute = express.Router();

gameRoute.use('/', controller.gameStart)








module.exports = gameRoute;
