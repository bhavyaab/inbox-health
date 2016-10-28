(function(module){
var deleteIds = {};
console.log('deleteIds called after button clicked!');
deleteIds.deleteMessage = function(ids, senderName) {
  var request = gapi.client.gmail.users.messages.delete({
    'userId': 'me',
    'ids': ids,
  });
  request.execute(
    function(resp) { console.log('deleted' + ids.length + 'emails from ' + senderName + ' sender.')});
}
module.deleteIds = deleteIds;
})(window)
