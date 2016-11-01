(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(allIds) {
    var request = gapi.client.gmail.users.messages.delete({
      'userId': 'me',
      'ids': allIds[0],
    });
    request.execute(
     function(resp) { console.log('resp = "' + resp + '"- deleted ' + ids.length + 'emails from ' + from + '  sender.');});
  };
  module.deleteIds = deleteIds;
})(window);
