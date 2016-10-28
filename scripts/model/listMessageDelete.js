(function(module) {
  var listDelete = {};
  listDelete.listMessages = function(from, senderName){
    var getPageOfMessages = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.messages);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken) {
          request = gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'pageToken': nextPageToken,
            'q': 'from:' + from,
          });
          getPageOfMessages(request, result);
        };
        ids = [];
        result.forEach(function(item){
          ids.push('"' + item.id + '"');
        });
        senderIdsTable.createDelTable(from, ids);
        $('#unsubscribe-page').on('click', 'li','#senderName',deleteIds.deleteMessage);
      });
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q': 'from:' + from,
    });
    getPageOfMessages(initialRequest,[]);
  };
  module.listDelete = listDelete;
})(window);
