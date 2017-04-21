// Packages
var dotenv = require('dotenv');
var path = require('path');
var express = require('express');
var socketio = require('socket.io');
var fs = require('fs');
var twit = require('twit');
var browserify = require('browserify');
var mongo = require("mongodb");
var debugHttp = require('debug-http');

// Configuration
dotenv.config();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var app = express();
debugHttp();

// MondoDB
var dbHost = "127.0.0.1"; //
var dbPort = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("node-js-intro",new mongo.Server(dbHost,dbPort,{}) ); // stores connection details

// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

// Set Static Path
app.use(express.static(path.join(__dirname, './public')));

// Declare paths which each one an own callback
app.get("/", function(request,response){

  // Read the content index.ejs
  var content = fs.readFileSync("./view/index.ejs");

  // Get Tweets
  getTweets(function(tweets){

    var ul = '';

    // Create a list with Tweets
    tweets.forEach(function(tweet){
    	ul += '<li><strong>' + tweet.user.screen_name + ": </strong>" + tweet.text + "</li>";
    });

    //Assigning back to itself
    content = content.toString("utf8").replace("{{INITIAL_TWEETS}}",ul);

    //Set custom header
    response.setHeader("Content-type","text/html");
    response.send(content);
  });

});

// Store tablename
var tweetCollection;

db.open(function(error){
  console.log("We are connected to : " + host + ":" + port);

  // Selecting a table
  db.collection("tweet", function(error, collection){
  	tweetCollection = collection;
  });
});

// Get last 20 Tweets
function getTweets(callback){

	//Adding empty object {} as we want all the results
	tweetCollection.find({},{"limit":20,"sort":{"_id":-1}},function(error, cursor){
		cursor.toArray(function(error,tweets){
			callback(tweets);
		});
	});
};

// Access tokens
var twit = new Twit({
    consumer_key:         process.env.CONSUMER_KEY,
    consumer_secret:      process.env.CONSUMER_SECRET,
    access_token:         process.env.ACCESS_TOKEN,
    access_token_secret:  process.env.ACCESS_TOKEN_SECRET
});

// Run Server
server.listen(process.env.PORT || 4000);
console.log('server running...');
