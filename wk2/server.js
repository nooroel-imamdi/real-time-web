// Packages
var dotenv = require('dotenv');
var path = require('path');
var express = require('express');
var socketio = require('socket.io');
var fs = require('fs');
var twit = require('twit');

// Configuration
dotenv.config();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var app = express();
debugHttp();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Set Static Path
app.use(express.static(path.join(__dirname, '/public')));

// Run Server
server.listen(process.env.PORT || 4000);
console.log('server running...');
