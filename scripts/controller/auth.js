var CLIENT_ID = '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com';

var SCOPES = ['https://www.googleapis.com/auth/gmail.modify'];
/**
* Check if current user has authorized this application.
this function is been called in the script tag onloading time.
*/

function checkAuth() {
  gapi.auth.authorize(
    {
      'client_id': CLIENT_ID,
      'scope': SCOPES.join(' '),
      'immediate': true
    }, handleAuthResult);
}


/**2**
* Handle response from authorization server.
* @param {Object} authResult Authorization result.
*/
function handleAuthResult(authResult) {
  var authorizeDiv = document.getElementById('authorize-div');
  if (authResult && !authResult.error) {
    // Hide auth UI, then load client library.
    authorizeDiv.style.display = 'none';
    loadGmailApi();
  } else {
    // Show auth UI, allowing the user to initiate authorization by
    // clicking authorize button.
    authorizeDiv.style.display = 'inline';
  }
}

/**1**
* Initiate auth flow in response to user clicking authorize button.
* @param {Event} event Button click event.
*/
function handleAuthClick(event) {
  gapi.auth.authorize(
    {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
    handleAuthResult);
  return false;
}

/**3**
* Load Gmail API client library. List labels once client library
* is loaded.
*/
function loadGmailApi() {
  gapi.client.load('gmail', 'v1', listMessages);
  // gapi.client.load('gmail', 'v1', getMessage);
}
/*listMessage is decleared in api.js*/
