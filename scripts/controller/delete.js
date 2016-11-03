(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(allIds) {
    allIds.forEach(function(item){
      var request = gapi.client.gmail.users.messages.delete({
        'userId': 'me',
        'id': item,
      });
      request.execute(
       function(resp) { console.log('resp = "' + resp + '"- deleted ' + ids.length + 'emails from ' + from + '  sender.');});
    });
  };
  module.deleteIds = deleteIds;
})(window);
