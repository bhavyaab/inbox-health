(function(module) {
  var list = {};
  list.listMessages = function(){
    var getPageOfMessages = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.messages);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken && (result.length < 100)) {
          request = gapi.client.gmail.users.messages.list({
            'userId': 'me',
            'pageToken': nextPageToken,
            'q': 'unsubscribe' || 'Unsubscribe' || 'opt out' || '#opt out',
          });
          getPageOfMessages(request, result);
        };
        result.forEach(function(item){
          getMessages.getMessage(item.id);
        });
      });
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      'userId': 'me',
      'q':'unsubscribe' || 'Unsubscribe' || 'opt out' || '#opt out',
      'resultSizeEstimate': 100,
    });
    getPageOfMessages(initialRequest,[]);
  };

  module.list = list;
})(window);
