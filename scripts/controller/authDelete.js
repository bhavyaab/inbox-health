(function(module) {
  var authDelete = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];

  authDelete.checkAuth = function() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      },authDelete.handleAuthResult);
  };

  authDelete.handleAuthClick = function(element) {
    var from = element.id;
    authDelete.handleAuthResult = function(authResult) {
      var authorizeDiv = document.getElementById(from);
      if (authResult && !authResult.error) {
        authorizeDiv.style.display = 'none';
        authDelete.loadGmailApi(from);
      } else {
        authorizeDiv.style.display = 'inline';
      }
    };
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
     authDelete.handleAuthResult);
    return false;
  };

  authDelete.loadGmailApi = function(from) {
    webDB.execute(
     'SELECT allIds FROM senderIds ' +
     'WHERE sender = ' + '"' + from + '"', function(result){
      var allIds = result[0].allIds.split(',');
      console.log(allIds[0]);
      gapi.client.load('gmail', 'v1', deleteIds.deleteMessage(allIds));
      console.log(from + ' deleteIds called after button clicked! ' + 'allIds = ' + result[0].allIds.length + 'result = ' + result);
    }
    );
  };

  module.authDelete = authDelete;
})(window);
