(function(module) {
  var authDelete = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://mail.google.com/'];

  authDelete.checkAuth = function() {
    gapi.authDelete.authorize
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, authDelete.handleAuthResult);
  };



  authDelete.handleAuthClick = function(event) {
    var authorizeDiv = $(this).find('button').attr('id');
    gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
     authDelete.handleAuthResult);
     authDelete.handleAuthResult = function(authResult) {
       var authorizeDiv = document.getElementById(authorizeDiv);
       if (authResult && !authResult.error) {
         authorizeDiv.style.display = 'none';
         authDelete.loadGmailApi();
       } else {
         authorizeDiv.style.display = 'inline';
       }
     };
    return false;
  };

  authDelete.loadGmailApi = function() {
    gapi.client.load('gmail', 'v1', listDelete.listMessagesDelete);
  };

  module.authDelete = authDelete;
})(window);
$('#unsubscribe-page').on('click', 'li','.delete',authDelete.handleAuthClick);
