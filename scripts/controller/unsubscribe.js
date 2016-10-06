/**
 * Send Message.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} email RFC 5322 formatted String.
 * @param  {Function} callback Function to call when the request is complete.
 */
 var callback = function(alert('You are successfully unsubscribed!!'););
function sendMessage(me, unsubscribe, callback) {
  // Using the js-base64 library for encoding:
  // https://www.npmjs.com/package/js-base64
  // var base64EncodedEmail = encoder.encodeURI(unsubscribe);
  var request = gapi.client.gmail.users.messages.send({
    'userId': 'me',
    'resource': {
      'raw':btoa('Unsubscribe me now!!'),
    }
  });
  request.execute(callback);
};
