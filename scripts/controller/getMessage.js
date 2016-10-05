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
function getMessage(userId, messageId) { //eslint-disable-line
  var request = gapi.client.gmail.users.messages.get({
    'userId': 'me',
    'id': messageId
  });
  request.execute(function(resp) {
    message.push(resp);
    generateInfo(resp);
  });
};

function noSubscribeHeader(currMessage) {
  var raw;
  if (currMessage.payload.parts) {
    if (currMessage.payload.parts.length > 1) {
      if (currMessage.payload.parts[1].body.data) {
        raw = currMessage.payload.parts[1].body.data.split(/[-_]/);
      }
    } else {
      if (currMessage.payload.parts[0].parts) {
        raw = currMessage.payload.parts[0].parts[1].body.data.split(/[-_]/);
      }
    }
  } else {
    raw = currMessage.payload.body.data.split(/[-_]/);
  }
  if (raw) {
    var newString = raw.reduce(function(acc, next) {
      try {
        return acc + (atob(next));
      }
      catch(e) {
      }
    }, '');
    var unsubscribePosition = newString.search('unsubscribe');
    if (unsubscribePosition === -1) {
      unsubscribePosition = newString.search('opt out');
    }
    var cutTo;
    if (unsubscribePosition - 1200 < 0) {
      cutTo = 0;
    } else {
      cutTo = unsubscribePosition - 1200;
    }
    var linkString = newString.slice(cutTo, unsubscribePosition);
    var allHrefs = linkString.split('href="');
    var link;
    if (allHrefs.length === 1) {
      if (unsubscribePosition + 1200 > newString.length) {
        cutTo = newString.length - 1;
      } else {
        cutTo = unsubscribePosition + 1200;
      }
      linkString = newString.slice(unsubscribePosition, cutTo);
      allHrefs = linkString.split('href="');
      if (allHrefs.length !== 1) {
        link = allHrefs[1].split('"')[0];
      }
    } else {
      link = allHrefs[allHrefs.length - 1].split('"')[0];
    }
  }
  return link;
}
