var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

users = [];
connections = [];

server.listen(process.env.PORT || 3000);
console.log('server running...');

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

// open a connection
io.sockets.on('connection', function(socket){
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnected', function(data){
    connections.splice(connections.indexOf(sockets), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', function(data){
    io.sockets.emit('new message', {msg: data});
  });

});
