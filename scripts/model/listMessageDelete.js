(function(module) {
  var listDelete = {};
  allResult = function(result, from){
    ids = [];
    result.forEach(function(item){
      if(item){
        ids.push(item.id);
      }else{
        console.log(from);
      };
    });
    senderIdsTable.insertIt(from, ids);
    emailNo.allEmails(from, ids.length);
  };

  listDelete.listMessages = function(from, senderName){
    var getPageOfMessages = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.messages);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken) {
          request = gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'pageToken': nextPageToken,
            'q': from && ('unsubscribe' || 'Unsubscribe' || 'opt out' || '#opt out' || 'SafeUnsubscribe' || 'SafeUnsubscribe™'),
          });
          getPageOfMessages(request, result);
        }else{
          allResult(result, from, senderName);
        };

      });
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q': from,
    });
    getPageOfMessages(initialRequest,[]);
  };
  module.listDelete = listDelete;
})(window);
