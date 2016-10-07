(function(module) {
  var listDelete = {};
  listDelete.listMessagesDelete = function(){
    var getPageOfMessages = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.messages);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken) {
          request = gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'pageToken': nextPageToken,
            'q': 'from:' + sender,
          });
          getPageOfMessages(request, result);
        };
        resultId = [];
        result.forEach(function(item){
          resultId.push(item.id);
        });
        deleteMessage();
        console.log('deleteMessage');
      });
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q': 'from:' + sender,
    });
    getPageOfMessages(initialRequest,[]);
  };
  function deleteMessage() {
    var request = gapi.client.gmail.users.messages.delete({
      'userId': 'me',
      'ids': resultId,
    });
    request.execute(
     function(resp) { });
  }
  console.log('listDelete');
  module.listDelete = listDelete;
})(window);
