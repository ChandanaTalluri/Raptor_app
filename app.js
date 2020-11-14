var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var passport = require('passport');
var flash    = require('connect-flash');
var bodyParser = require('body-parser');
var session      = require('express-session');

const indexRouter = require('./routes/index');
const homePageRouter = require('./routes/homePageRouter');
const birdSettingsRouter = require('./routes/birdSettingsRouter');
const feedingRouter = require('./routes/feedingRouter');
const animalsRouter = require('./routes/animalsRouter');
const foodTypeRouter = require('./routes/foodTypeRouter');
const medicinesRouter = require('./routes/medicinesRouter');
const userRouter = require('./routes/userRouter');


var app = express();

require('./config/passport')(passport);

require('dotenv').config({path: __dirname + '/.env'})

mongoose.connect(process.env['CONNECTION'],{ useNewUrlParser: true, useUnifiedTopology: true });


app.use(bodyParser.urlencoded({
    extended: true,
  }));
  app.use(bodyParser.json());

 
app.use(cookieParser()); // read cookies (needed for auth)
// required for passport
app.use(session({
    secret: 'devkey',
    resave: true,
    saveUninitialized: true,
  }));
  
  app.use(passport.initialize());
  app.use(passport.session()); 
  app.use(flash()); 
   
  app.use(function (req, res, next) {
    res.locals.user = req.user;
    next();
  });
  
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/homepage',homePageRouter);
app.use('/settings',birdSettingsRouter);
app.use('/feeding',feedingRouter);
app.use('/animals',animalsRouter);
app.use('/foodType',foodTypeRouter);
app.use('/medicines',medicinesRouter);
app.use('/user',userRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;