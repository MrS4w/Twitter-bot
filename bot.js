console.log("Running!");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

// Selects a user stream
var stream = T.stream('user');

// When someone follows me
stream.on('follow', followed);


function followed(eventMsg) {
  console.log("Following message!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetMsg('Hi @' + screenName + ' thanks for following me!');
}

// Tweet random numbers
tweetIt();
setInterval(tweetIt, 1000 * 30);

function tweetIt() {
  var r = Math.floor(Math.random() * 9999);
  var tweet = {
    status: 'Tweeting a random number: ' + r + '!'
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something wrong with the random number!");
    } else {
      console.log("Tweeted a number!");
    }
  }
}
// Tweets thank you message
function tweetMsg(txt) {
  var tweet = {
    status: txt
  }

  T.post('statuses/update', tweet, tweeted);

  function tweeted(err, data, response) {
    if (err) {
      console.log("Something wrong with the thank you message!");
    } else {
      console.log("Tweeted a thank you message!");
    }
  }
}
