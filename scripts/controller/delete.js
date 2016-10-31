(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(event) {
    var from = this.id;
    var allIds = webDB.execute(
     'SELECT allIds FROM senderIds ' +
     'WHERE sender = ' + '"' + from + '"'
    );
    console.log(from + ' deleteIds called after button clicked! ' + 'allIds = ' + allIds);
    var request = gapi.client.gmail.users.messages.delete({
      'userId': 'me',
      'ids': allIds,
    });
    request.execute(
   function(resp) { console.log(resp + '- deleted' + ids.length + 'emails from ' + senderName + ' sender.');});
  };
  module.deleteIds = deleteIds;
})(window);
