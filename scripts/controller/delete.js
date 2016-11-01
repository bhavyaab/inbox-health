(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(element) {
    var deleteAll = function(allIds){
      var request = gapi.client.gmail.users.messages.batchDelete({
        'userId': 'me',
        'ids': allIds,
      });
      request.execute(
       function(resp) { console.log(resp + '- deleted ' + ids.length + 'emails from ' + from + '  sender.');});
    };
    var from = element.id;

    webDB.execute(
     'SELECT allIds FROM senderIds ' +
     'WHERE sender = ' + '"' + from + '"', function(result){
      var allIds = result[0].allIds.split(',');
      console.log(allIds[0]);
      deleteAll(allIds);
      console.log(from + ' deleteIds called after button clicked! ' + 'allIds = ' + result[0].allIds.length + 'result = ' + result);
    }
    );
  };
  module.deleteIds = deleteIds;
})(window);
