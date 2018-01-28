console.log("iniciando!");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

tweetIt();
setInterval(tweetIt,1000*30);

function tweetIt() {
  var r = Math.floor(Math.random()*9999);
  var tweet ={
    status:'Tweetando um número aleatório: '+r+'!'
  }

  T.post('statuses/update',tweet,tweeted);

  function tweeted(err, data, response) {
    if(err){
      console.log("Algo foi errado!");
    }else {
      console.log("Funcionou!");
    }
  }
}
