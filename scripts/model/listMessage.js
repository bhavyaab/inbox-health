(function(module) {
  var list = {};
  list.listMessages = function(userId){
    var getPageOfMessages = function(request, result) {
      request.execute(function(resp) {
        result = result.concat(resp.messages);
        var nextPageToken = resp.nextPageToken;
        if (nextPageToken && (result.length < 200)) {
          request = gapi.client.gmail.users.messages.list({
            'userId': userId,
            'pageToken': nextPageToken,
            'q': 'unsubscribe' || 'Unsubscribe' || 'opt out' || '#opt out' || 'SafeUnsubscribe' || 'SafeUnsubscribe™',
          });
          getPageOfMessages(request, result);
        };
        result.forEach(function(item){
          getMessages.getMessage(item.id);
        });
      });
    };
    var initialRequest = gapi.client.gmail.users.messages.list({
      'userId': userId,
      'q':'unsubscribe' || 'Unsubscribe' || 'opt out' || '#opt out' || 'SafeUnsubscribe' || 'SafeUnsubscribe™',
      'resultSizeEstimate': 200,
    });
    getPageOfMessages(initialRequest,[]);
    anim.initiate();
  };
  module.list = list;
})(window);
