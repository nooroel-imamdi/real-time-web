var socket = io.connect();
var messageForm = document.querySelector('#message-form');
var message = document.querySelector('#message');
var chat = document.querySelector('#chat');
var messageArea = document.querySelector('#message-area');

var userFormArea = document.querySelector('#user-form-area');
var userNameForm = document.querySelector('#user-name-form');
var users = document.querySelector('#users');
var username = document.querySelector('#username');

// socket.on('new message', newMessage);
// messageForm.addEventListener('submit', submitMessage);
// userNameForm.addEventListener('submit', newUser);

// messageForm.submit(function(e){
//   e.preventDefault();
//   socket.emit('send message', message.val());
//   message.val('');
// });

socket.on('new message' , newMessage);

messageForm.addEventListener('submit', function(e){
  e.preventDefault();
  socket.emit('send message', message.value);
  message.value = '';
});

// function submitMessage(e){
//   e.preventDefault();
//   socket.emit('send message', message.value());
//   message.value('');
// };



// socket.on('new message', function(data){
//   chat.append('<div class="well"><strong>'+ data.user + '</strong>' + data.msg + '</div>');
// });

function newMessage(data){
  var list = document.createElement('li');
  list.className = "message";
  list.innerHTML = '<strong>' + data.user + '</strong>' + data.msg;

  document.querySelector('#chat').appendChild(list);
};

userNameForm.addEventListener('submit', function(e){
  e.preventDefault();
  socket.emit('new user', username.value, function(data){
    if(data){
      userFormArea.style.display = 'none';
      messageArea.style.display = 'block';
    }
  });
  // username.value('');
});

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

// function newUser(e){
//   socket.emit('new user', username.value(), function(data){
//     if(data){
//       userFormArea.style.display = 'none';
//       messageArea.style.display = 'block';
//     }
//   });
//   e.preventDefault();
//
//   username.value('');
// };

function getUsers(){
  socket.on('get users', function(data){
    var html = '';
    for(i = 0; i < data.length; i++){
      html += '<li class="list-group-item">'+ data[i] +'</li>';
    }
    users.html(html);
  });
};
