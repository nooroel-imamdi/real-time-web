// Modules
var express = require('express');
var browserify = require('browserify');

var app = express();

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/src/views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './src')));

var server = app.listen(3000,function(){
	console.log('Server Started on Port 3000');
});
