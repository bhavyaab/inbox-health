(function(module){
  var noOfEmails = {};
  noOfEmails.allEmails = function(from){
   var allEmails;
   webDB.execute(
    'SELECT allIds FROM senderIds ' +
    'WHERE sender = ' + '"' + from + '"', function(result){
     allEmails = result[0].allIds.split(',');
     console.log(allEmails.length);
    });
   var button = document.getElementById(from);
   var emailsNo = document.createElement('div');
  emailsNo.setAttribute('class', 'delete');
  emailsNo.innerHTML = allEmails.length + 'emails';
  button.parentNode.insertBefore(emailsNo, button.nextSibling);
 };
}
(module).noOfEmails = noOfEmails;
).window
