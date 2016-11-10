(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, emailsNo){
    if(emailsNo === 1){
      document.getElementById(from).innerHTML = 'Delete ' + emailsNo + ' email';
    }else{
      document.getElementById(from).innerHTML = 'Delete all ' + emailsNo + ' emails';
    };
  };
  emailNo.offEventListner = function(element){
    webDB.execute('UPDATE senderIds SET allIds = 0 WHERE sender = ' + '"' + element.id + '"');
  };
  (module).emailNo = emailNo;
})(window);
