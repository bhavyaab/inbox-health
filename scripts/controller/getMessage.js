var message = [];
var requireInfo = [];
function getInfo(from, unsubscribe){
  this.form = from;
  this.unsubscribe = unsubscribe;
};
/**
 * Get Message with given ID.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} messageId ID of Message to get.
 * @param  {Function} callback Function to call when the request is complete.
 */
 // var callback = function(){console.log(message);};
function getMessage(userId, messageId) {
  var request = gapi.client.gmail.users.messages.get({
    'userId': 'me',
    'id': messageId
  });
  request.execute(function(resp) {
    message.push(resp);
    requireInfo.push(new getInfo(resp.payload.headers[13], resp.payload.headers[17]));
  });
  // callback();
}