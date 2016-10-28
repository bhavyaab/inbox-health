(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(ids, senderName) {
    console.log('deleteIds called after button clicked!');
    var request = gapi.client.gmail.users.messages.delete({
      'userId': 'me',
      'ids': ids,
    });
    request.execute(
   function(resp) { console.log(resp + '- deleted' + ids.length + 'emails from ' + senderName + ' sender.');});
  };
  module.deleteIds = deleteIds;
})(window);
