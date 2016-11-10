(function(module) {
  var auth = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.modify', 'https://www.googleapis.com/auth/plus.login'];

  auth.checkAuth = function() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, auth.handleAuthResult);
  };

  auth.handleAuthResult = function(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      authorizeDiv.style.display = 'none';
      auth.loadGmailApi();
    } else {
      authorizeDiv.style.display = 'inline';
    }
  };
  auth.handleAuthClick = function(event) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      auth.handleAuthResult);
    return false;
  };

  auth.loadGmailApi = function() {
    gapi.client.load('plus','v1', profile.info);
    gapi.client.load('gmail', 'v1', list.listMessages);
  };

  module.auth = auth;
})(window);
