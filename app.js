var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const productsRouter = require("./routes/products");
const session = require("express-session")
const db = require("./database/models");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session( {
  secret: "perfumeria",
  resave: false, 
  saveUninitialized: true
}))

app.use(function(req,res,next){
  if(req.session.usuarioLogueado != undefined){
    res.locals.user = req.session.usuarioLogueado
  }
  return next();
}); //locals hace que se comparta con las vistas

app.use(function (req,res,next){
  if(req.session.usuarioLogueado == undefined && req.cookies.userId != undefined){
    db.Usuario.findByPK(req.cookies.userId)
    .then(function(data){
      req.session.usuarioLogueado = data
      res.locals.user = data
    })
  }else{
    return next();
  }
})



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/products", productsRouter);


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
