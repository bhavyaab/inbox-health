var resultId = [];
/**
 * Retrieve Messages in user's mailbox matching query.
 *
 * @param  {String} userId User's email address. The special value 'me'
 * can be used to indicate the authenticated user.
 * @param  {String} query String used to filter the Messages listed.
 * @param  {Function} callback Function to call when the request is complete.
 */
 /*
 **4**
 1.getPageOfMessages and initialRequest is decleared and invoked just after declear.
 2.getPageOfMessages invoked and as a request - initialRequest is invoked.
 3.initialRequest makes API request with the user id as 'me' because useer who is signed in.
 4.includeSpamTrash is passed true for including trash and spam folder.
 5.q has assigned value for filterout messages which has  'unsubscribe, safeunsubscribe'.
 */
// var query ='unsubscribe, Unsubscribe, opt out, #op out';
function listMessages(me, query){
  var getPageOfMessages = function(request, result) {
    request.execute(function(resp) {
      result = result.concat(resp.messages);
      var nextPageToken = resp.nextPageToken;
      if (nextPageToken && (result.length < 2000)) {
        request = gapi.client.gmail.users.messages.list({
          'userId': 'me',
          'pageToken': nextPageToken,
          'q': 'unsubscribe' || 'Unsubscribe' || 'opt out',
          'maxResults': 2000
        });
        getPageOfMessages(request, result);
      }
      resp.messages.forEach(function(item){
        resultId.push(item);
        getMessage(me, item.id);  //it will go to getmessage.js page
      });
    });
  };
  var initialRequest = gapi.client.gmail.users.messages.list({
    'userId': 'me',
    'q':'unsubscribe' || 'Unsubscribe' || 'opt out',
    'maxResults': 2000
  });
  getPageOfMessages(initialRequest,[]);
}
