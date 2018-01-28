console.log("iniciando!");
var Twit = require('twit');
var T = new Twit({
  consumer_key:         'vOuuRLoieMruK0x5732RFeTm8',
  consumer_secret:      '3OXJ780uTje0jpv84I3c1D3B5w5YPDK3anPNCAJczOv2c9TU62',
  access_token:         '957723639046078464-uHDNBCtwavkMr9schvRgzZZlO8s1wYP',
  access_token_secret:  'vpPG0hN1I9w5VJEOYU5CFN3Hf60dcNISTINHruU6iGbGn',
});
T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
  console.log(data)
}); 
