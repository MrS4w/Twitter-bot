console.log("iniciando!");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var tweet ={
  status:'twitting from node.js!'
}

T.post('statuses/update',tweet,tweeted);

function tweeted(err, data, response) {
  if(err){
    console.log("Algo foi errado!");
  }else {
    console.log("Funcionou!");
  }
}
