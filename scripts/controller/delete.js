(function(module){
  var deleteIds = {};
  deleteIds.deleteMessage = function(event) {
    console.log(senderName + 'deleteIds called after button clicked!' +ids);
    var request = gapi.client.gmail.users.messages.delete({
      'userId': 'me',
      'ids': ids,
    });
    request.execute(
   function(resp) { console.log(resp + '- deleted' + ids.length + 'emails from ' + senderName + ' sender.');});
  };
  module.deleteIds = deleteIds;
})(window);
