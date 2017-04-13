var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var path = require('path');
var browserify = require('browserify');

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running...');

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// Set Static Path
app.use(express.static(path.join(__dirname, '/public')));

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

// Routing
app.get('/', function (req, res) {
    res.render('index.ejs')
});

// // Socket.io
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', function(data){
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', function(data){
    io.sockets.emit('new message', {msg: data, user: socket.username});
  });

  // New users
  socket.on('new user', function(data, callback){
    callback(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames(){
    io.sockets.emit('get users', users);
  }

});
