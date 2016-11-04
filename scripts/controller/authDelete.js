(function(module) {
  var authDelete = {};
  var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/gmail.modify', 'https://mail.google.com/'];
  var from;
  var allIds;
  var messageId;
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
  authDelete.handleAuthClick = function(element) {
    from = element.id;
    gapi.auth.authorize(
     {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
     authDelete.handleAuthResult);
    return false;
  };
  deleteMessage = function() {
    var delBatch = gapi.client.newHttpBatch();
    allIds.forEach(function(item){
      var request = gapi.client.gmail.users.messages.delete({
        'userId': 'me',
        'id': item,
      });

      delBatch.add(request);
      //request.execute(
      // function(resp) { console.log('resp = "' + resp + '"- deleted emails from ' + from + '  sender.');});
    });

    delBatch.execute(function(resp){
     console.log(resp);
    });
    console.log('inside deleteIds.deleteMessage', 'allIds - ' + allIds[0]);
  };
  var deleteBatch = function(){
   var callApi = function(){
    $.ajax({
     url: 'https://www.googleapis.com/gmail/v1/users/me/messages/batchDelete?key=AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU&access_token=' + accessToken,
     type: 'post',
     headers: {'Content-Type': 'application/json'},
     data: JSON.stringify(requestData),
     success: function(data, status){
      console.log(data);
      console.log(status);
     }
    }).fail(function(error){
     console.log(error);
    });
   })
   gapi.client.init({
  'apiKey': 'AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU',
  'clientId': '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com',
  'scope': 'https://mail.google.com/',
}).then(function(result, result1){
 if(allIds.length < 1000){
  var requestData = {ids : allIds};
  callApi();
 }else{
  while (allIds.length > 1000) {
   var requestData = allIds.splice(0, 999);
   console.log('requestData-' + requestData.length);
   callApi();
  }
 };
 };
  };
  loadGmailApi = function(from) {
    webDB.execute(
     'SELECT allIds FROM senderIds ' +
     'WHERE sender = ' + '"' + from + '"', function(result){
      console.log(result);
      allIds = result[0].allIds.split(',');
      console.log('type of allIds - ' + typeof(allIds), allIds);
      deleteBatch();
    }
    );
  };

  module.authDelete = authDelete;
})(window);
