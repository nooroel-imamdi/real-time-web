// Packages
var dotenv = require('dotenv');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser')
var socketio = require('socket.io');
var fs = require('fs');
var browserify = require('browserify');
var debugHttp = require('debug-http');
var userList = require('./user-list');

// Configuration
dotenv.config();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use(bodyParser.urlencoded({ extended: false }))

debugHttp();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Router
app.get('/', function(req, res) {
  res.render('index.ejs');
});

app.post('/get_users', function(req, res){
  var screen_name = req.body.handle;
  var users = userList(res, screen_name);
});

// Run Server
server.listen(process.env.PORT || 3000);
console.log('server running...');
