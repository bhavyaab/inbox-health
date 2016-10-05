/*5*/
var message = [];
/**
 * Get Message with given ID.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} messageId ID of Message to get.
 * @param  {Function} callback Function to call when the request is complete.
 */
<<<<<<< HEAD
function getMessage(userId, messageId) { //eslint-disable-line
=======
function getMessage(messageId) {
>>>>>>> f72e0ee057ad7ed669b83320bd81cdcf140a7090
  var request = gapi.client.gmail.users.messages.get({
    'userId': 'me',
    'id': messageId
  });
  request.execute(function(resp) {
    message.push(resp);
    generateInfo(resp);

  });
};
