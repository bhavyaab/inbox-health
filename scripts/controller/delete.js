(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(allIds) {
    var deleteAll = function(allIds){
      allIds.forEach(function(ele){
        var request = gapi.client.gmail.users.messages.delete({
          'userId': 'me',
          'ids': ele,
        });
        request.execute(
         function(resp) { console.log('resp = "' + resp + '"- deleted ' + ids.length + 'emails from ' + from + '  sender.');});
      }
      );};
    deleteAll(allIds);
  };
  module.deleteIds = deleteIds;
})(window);
