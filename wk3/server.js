// Packages
var dotenv = require('dotenv');
var path = require('path');
var express = require('express');
var socketio = require('socket.io');
var fs = require('fs');
var Twitter = require('twitter');
var browserify = require('browserify');
var mongo = require("mongodb");
var debugHttp = require('debug-http');

// Configuration
dotenv.config();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var app = express();
debugHttp();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

// Run Server
server.listen(process.env.PORT || 4000);
console.log('server running...');
