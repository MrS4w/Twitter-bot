console.log("Rodando!");

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


//Seleciona um usuário stream
var stream = T.stream('user');
//Quando alguém me segue
stream.on('follow',followed);

function followed(eventMsg) {
  console.log("Mensagem de seguir!");
  var name = eventMsg.source.name;
  var screenName = eventMsg.source.screen_name;
  tweetMsg('Olá @'+screenName+' obrigado por me seguir!');
}
//Tweetando números aleatórios
tweetIt();
setInterval(tweetIt,1000*30);

function tweetIt() {
  var r = Math.floor(Math.random()*9999);
  var tweet ={
    status: 'Tweetando um número aleatório: '+r+'!'
  }

  T.post('statuses/update',tweet,tweeted);

  function tweeted(err, data, response) {
    if(err){
      console.log("Algo deu errado no tweet de num!");
    }else {
      console.log("Tweetou um numero!");
    }
  }
}
//Tweetando mensagens de follow
function tweetMsg(txt) {
  var tweet ={
    status: txt
  }

  T.post('statuses/update',tweet,tweeted);

  function tweeted(err, data, response) {
    if(err){
      console.log("Algo deu errado no follow msg!");
    }else {
      console.log("Tweetou msg de follow!");
    }
  }
}
