// Packages
var Twitter = require('twitter');
var socketio = require('socket.io');


// Configuration


module.exports = function(res, userinput) {
  // Twitter API
  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

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

    io.sockets.emit('newTwitt', data);

    // Push object in to array listOfResults
    listOfResults.push(tweetObjects);
    console.log(listOfResults)
    res.render('results.ejs', { tweets: listOfResults });

  });

  // If there is some error
  stream.on('error', function(error) {
    throw error;
  });

}
