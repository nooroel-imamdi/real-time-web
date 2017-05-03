// Packages
var dotenv = require('dotenv');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var socketio = require('socket.io');
var fs = require('fs');
var browserify = require('browserify');
var debugHttp = require('debug-http');
var userList = require('./user-list');
var trendList = require('./trend-list');
// var statuses = require('./statuses');
var Twitter = require('twitter');
var ngrok = require('ngrok');

connections = [];

// Configuration
dotenv.config();
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());

// Twitter API
var client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
});

debugHttp();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Router
app.get('/', function(req, res, next) {
  res.render('index.ejs');
});

// app.post('/get_users', function(req, res){
//   var screen_name = req.body.handle;
//   var users = userList(res, screen_name);
// });

app.post('/results', function(req, res, next){
  var userinput = req.body.handle;
  // var results = statuses(res, userinput);

  // Userinput from form will be put in the track
  var params = {track: userinput};
  // results will be stored in listOfResults
  var listOfResults = []

  // Open and manipulate data via a stream
  var stream = client.stream('statuses/filter', params);
  stream.on('data', function(data) {

    // Relevant content from API will put in a object
    var tweetObjects = {
      name: data.user.name,
      screen_name: data.user.screen_name,
      msg: data.text
    };

    // Push object in to array listOfResults
    listOfResults.push(tweetObjects);
    console.log(listOfResults)
    res.render('results.ejs', { tweets: listOfResults });

  });

  // If there is some error
  stream.on('error', function(error) {
    throw error;
  });
});

// // Socket.io
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // // Disconnect
  // socket.on('disconnect', function(data){
  //   users.splice(users.indexOf(socket.username), 1);
  //   updateUsernames();
  //   connections.splice(connections.indexOf(socket), 1);
  //   console.log('Disconnected: %s sockets connected', connections.length);
  // });

  // // Send message
  // socket.on('send message', function(data){
  //   io.sockets.emit('new message', {msg: data, user: socket.username});
  // });
  //
  // // New users
  // socket.on('new user', function(data, callback){
  //   callback(true);
  //   socket.username = data;
  //   users.push(socket.username);
  //   updateUsernames();
  // });

  // function updateUsernames(){
  //   io.sockets.emit('get users', users);
  // }

});

// Run Server
server.listen(process.env.PORT || 3000);
console.log('server running...');
