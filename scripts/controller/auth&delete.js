(function(module) {
  var authDelete = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.modify', 'https://mail.google.com/'];
  var from;
  var allIds;
  var accessToken;

  authDelete.checkAuth = function() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      },authDelete.handleAuthResult);
  };
  authDelete.handleAuthResult = function(authResult) {
    accessToken = authResult.access_token;
    var authorizeDiv = document.getElementById(from);
    if (authResult && !authResult.error) {
      authorizeDiv.style.display = 'inline';
      loadGmailApi(from);
    } else {
      authorizeDiv.style.display = 'inline';
    }
  };
  var deleteBatch = function(){
    gapi.client.init({
      'apiKey': 'AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU',
      'clientId': '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com',
      'scope': 'https://mail.google.com/',
    }).then(function(){
      var callApi = function(){
        $.ajax({
          url: 'https://www.googleapis.com/gmail/v1/users/me/messages/batchDelete?key=AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU&access_token=' + accessToken,
          type: 'post',
          headers: {'Content-Type': 'application/json'},
          data: JSON.stringify(requestData),
          success: function(){
            console.log('you have deleted ' + allIds.length + ' emails');
          }
        }).fail(function(error){
          console.log(error);
        });
      };
      var requestData;
      console.log('you have ' + allIds.length + ' emails');
      if (allIds.length > 1000) {
        do {
          requestData = allIds.splice(0, 999);
          console.log('requestData length = ' + requestData.length);
          callApi();
        }while(allIds.length > 1000);
      } else {
        console.log('you have requestData ' + allIds.length + ' emails');
        requestData = {ids : allIds};
        callApi();
      };
    });
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
      allIds = result[0].allIds.split(',');
      deleteBatch();
      document.getElementById(from).removeEventListener('onclick', authDelete.handleAuthResult);
    }
    );
  };

  module.authDelete = authDelete;
})(window);