<<<<<<< HEAD
/**
 * Send Message.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} email RFC 5322 formatted String.
 * @param  {Function} callback Function to call when the request is complete.
 */
function sendMessage(userId, unsubscribe, callback) {
  // Using the js-base64 library for encoding:
  // https://www.npmjs.com/package/js-base64
  var encoder = require('js-base64');
  var base64EncodedEmail = encoder.encodeURI(unsubscribe);
  var request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw': base64EncodedEmail,
    }
  });
  request.execute(callback);
=======
function unsubscribeLink() {
if 
>>>>>>> b00d63b5e9ee32315f4aaa75a1a3803789e09a88
}
