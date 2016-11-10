(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, emailsNo){
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
  };
  emailNo.insert();
  (module).emailNo = emailNo;
})(window);
