// Modules
var express = require('express');
var path = require('path');
var browserify = require('browserify');
var server = require('http').Server(app);
var io = require('socket.io')(server);

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// creates http server
var server = require('http').Server(app);
// sets up our websockets server to run in the same app
var io = require('socket.io')(server);

var users = [];
var connection = []; 

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

module.exports = app;
module.exports = {app: app, server: server};
