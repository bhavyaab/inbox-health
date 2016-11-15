(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, emailsNo){
<<<<<<< HEAD
    document.getElementById(from).innerHTML = 'Delete all ' + emailsNo + ' emails';
  };
  emailNo.insert = function(){
    webDB.execute('SELECT * FROM senderIds', function(senderIds) {
      if(senderIds.length){
        senderIds.forEach(function(item){
          if(i3tem.allIds){
            emailNo.allEmails(item.sender, item.emailsNo);
          }else{
            document.getElementById(from).innerHTML = allIds.length + ' emails deleted';
            document.getElementById(from).setAttribute( 'onClick', 'authDelete.offEventListner(this);' );
          }
        });}});
=======
    var button = document.getElementById(from);
    if(button){
      if(emailsNo === 1){
      button.innerHTML = 'Delete ' + emailsNo + ' email';
    }else{
      button.innerHTML = 'Delete all ' + emailsNo + ' emails';
    };
  };
>>>>>>> 62d8f1b4e221ccce078c6c5584e93cd6c5879ab7
  };
  emailNo.offEventListner = function(element){
    webDB.execute('UPDATE senderIds SET allIds = 0 WHERE sender = ' + '"' + element.id + '"');
  };
  (module).emailNo = emailNo;
})(window);
