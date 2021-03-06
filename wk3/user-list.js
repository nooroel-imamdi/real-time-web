// Packages
var Twitter = require('twitter');

module.exports = function(res, screen_name) {
  // Twitter API
  var client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  });

  var params = {screen_name: screen_name};
  var one_way_following = [];
  var users_to_display = [];

  client.get('followers/ids', params, function(error, followers_results, response) {
    if (error) {
      throw error;
    }

    var followers = followers_results.ids;

    client.get('friends/ids', params, function(error, following_results, response) {
      if (error) {
        throw error;
      }

      var following = following_results.ids;

      following.forEach(function(person) {
        // if someone you follow doesn't follow you
        if (followers.indexOf(person) === -1) {
          one_way_following.push(person);
        }
      });

      // Only take the first 10 users
      one_way_following = one_way_following.slice(0, 10);

      // Turn array in to a string
      var one_way_following_string = one_way_following.join();

      // List of users I follow and doesn't follow me
      client.get('users/lookup', {user_id: one_way_following_string}, function (error, users_results, resonse){
        users_results.forEach(function(user){
          var userObject = {
            name: user.name,
            screen_name: user.screen_name,
            avatar: user.profile_image_url
          };

          users_to_display.push(userObject);
        });
        console.log(users_to_display);
        res.render('list.ejs', { users: users_to_display });
      });

    });
  });
}
