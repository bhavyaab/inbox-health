(function(module) {
  var load = {};

var accessToken = localStorage.getItem('accessToken');
gapi.client.init({
  'apiKey': 'AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU',
  'clientId': '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com',
  'scope': 'https://mail.google.com/',
}).then(function(){
  console.log(' im am reloaded');

  gapi.client.load('gmail', 'v1', list.listMessages('me'));
})


module.load = load;
})(window);
