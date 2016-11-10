(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, emailsNo){
    var button = document.getElementById(from);
    if(emailsNo === 1){
      button.innerHTML = 'Delete ' + emailsNo + ' email';
    }else{
      button.innerHTML = 'Delete all ' + emailsNo + ' emails';
    };
  };
  emailNo.offEventListner = function(element){
    webDB.execute('UPDATE senderIds SET allIds = 0 WHERE sender = ' + '"' + element.id + '"');
  };
  (module).emailNo = emailNo;
})(window);
