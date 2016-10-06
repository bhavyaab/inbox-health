(function(module) {
  var getMessages = {};

  getMessages.getMessage = function(messageId) {
    var request = gapi.client.gmail.users.messages.get({
      'userId': 'me',
      'id': messageId
    });
    request.execute(function(resp) {
      output.generateInfo(resp);
    });
  };

  module.getMessages = getMessages;
})(window);
