(function(module) {
  var authDelete = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];
  var from;
  var messageId;

  authDelete.checkAuth = function() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      },authDelete.handleAuthResult);
  };

  authDelete.handleAuthResult = function(authResult) {
    var authorizeDiv = document.getElementById(from);
    if (authResult && !authResult.error) {
      authorizeDiv.style.display = 'inline';
      loadGmailApi(from);
    } else {
      authorizeDiv.style.display = 'inline';
    }
  };
  authDelete.handleAuthClick = function(element) {
    from = element.id;
    gapi.auth.authorize(
     {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
     authDelete.handleAuthResult);
    return false;
  };

  loadGmailApi = function(from) {
    webDB.execute(
     'SELECT allIds FROM senderIds ' +
     'WHERE sender = ' + '"' + from + '"', function(result){
      var allIds = result[0].allIds.split(',');
      console.log(typeof(allIds));
      console.log(result);
      deleteMessage = function() {
        console.log('inside deleteIds.deleteMessage', 'allIds - ' + allIds[0]);
        var request = gapi.client.gmail.users.messages.delete({
          'userId': 'me',
          'id': allIds[0],
        });
        request.execute(
         function(resp) { console.log('resp = "' + resp + '"- deleted emails from ' + from + '  sender.');});
      };
      gapi.client.load('gmail', 'v1', deleteMessage);
    }
    );
  };

  module.authDelete = authDelete;
})(window);
