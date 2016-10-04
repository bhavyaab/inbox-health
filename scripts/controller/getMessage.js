var message = [];
var requireInfo = [];
function getInfo(from, unsubscribe){
  this.from = from;
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
function getMessage(userId, messageId) { //eslint-disable-line
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

function noSubscribeHeader() {
  var raw = message[0].payload.parts[1].body.data.split(/[-_]/);
  var newString = '';
  for (var i = 0; i < raw.length; i++) {
    newString = newString.concat(atob(raw[i]));
  }
  var foundUnsubscribe = newString.search('unsubscribe');
  var linkString = newString.slice((foundUnsubscribe - 550), foundUnsubscribe);
  var link = linkString.split('href="')[1].split('"')[0];
}
