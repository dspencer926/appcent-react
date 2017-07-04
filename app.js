const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

require('dotenv').config();

const app = express();




const PORT = process.env.PORT || 3002;
app.listen(PORT, () =>{
  console.log(`Listening on port ${PORT}`);
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'client/build')));
app.use(logger('dev'));

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// ____________________________ Routes ___________________________________

const apiRoute = require('./routes/apiRoute');
app.use('/api', apiRoute);

const authRoute = require('./routes/authRoute');
app.use('/auth', authRoute);

app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
 });
 
app.get('*', (req, res) => {
  res.status(404).send({message: 'not found!'});
});
