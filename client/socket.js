var socket = io();
var messageForm = document.getElementById('message-form');
var message = document.getElementById('message');
var chat = document.getElementById('chat');
var messageArea = document.getElementById('message-area');

var userFormArea = document.getElementById('user-form-area');
var userForm = document.getElementById('user-form');
var users = document.getElementById('users');
var username = document.getElementById('username');

socket.on('new message', newMessage);
messageForm.addEventListener('submit', submitMessage);
userForm.addEventListener('submit', newUser);

// messageForm.submit(function(e){
//   e.preventDefault();
//   socket.emit('send message', message.val());
//   message.val('');
// });

function submitMessage(e){
  socket.emit('send message', message.value());
  message.value('');
  e.preventDefault();
};

// socket.on('new message', function(data){
//   chat.append('<div class="well"><strong>'+ data.user + '</strong>' + data.msg + '</div>');
// });

function newMessage(data){
   socket.on('new message', message.value);
   message.value = '';
   e.preventDefault();
};

// userForm.submit(function(e){
//   e.preventDefault();
//   socket.emit('new user', username.val(), function(data){
//     if(data){
//       userFormArea.hide();
//       messageArea.show();
//     }
//   });
//   username.val('');
// });

function newUser(e){
  socket.emit('new user', username.value(), function(data){
    if(data){
      userFormArea.style.display = 'none';
      messageArea.style.display = 'block';
    }
  });
  e.preventDefault();

  username.value('');
};

function getUsers(){
  socket.on('get users', function(data){
    var html = '';
    for(i = 0; i < data.length; i++){
      html += '<li class="list-group-item">'+ data[i] +'</li>';
    }
    users.html(html);
  });
};
