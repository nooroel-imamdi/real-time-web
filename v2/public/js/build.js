(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var socket = io.connect();
var messageForm = document.getElementById('message-form');
var message = document.getElementById('message');
var chat = document.getElementById('chat');
var messageArea = document.getElementById('message-area');
var userFormArea = document.getElementById('user-form-area');
var userForm = document.getElementById('user-form');
var users = document.getElementById('users');
var username = document.getElementById('username');

messageForm.submit(function(e){
  e.preventDefault();
  socket.emit('send message', message.val());
  message.val('');
});

socket.on('new message', function(data){
  chat.append('<div class="well"><strong>'+ data.user + '</strong>' + data.msg + '</div>');
});

userForm.submit(function(e){
  e.preventDefault();
  socket.emit('new user', username.val(), function(data){
    if(data){
      userFormArea.hide();
      messageArea.show();
    }
  });
  username.val('');
});

socket.on('get users', function(data){
  var html = '';
  for(i = 0; i < data.length; i++){
    html += '<li class="list-group-item">'+ data[i] +'</li>';
  }
  users.html(html);
});

},{}]},{},[1]);
