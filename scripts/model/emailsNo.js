(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, emailsNo){
    var button = document.getElementById(from);
    button.append = 'Delete all ' + emailsNo + ' emails';
  };
  emailNo.insert = function(){
    webDB.execute('SELECT * FROM senderIds', function(senderIds) {
      if(senderIds.length){
        senderIds.forEach(function(item){
          if(item.allIds){
            emailNo.allEmails(item.sender, item.emailsNo.length);
          }else{
            document.getElementById(from).innerHTML = allIds.length + ' emails deleted';
            document.getElementById(from).setAttribute( 'onClick', 'authDelete.offEventListner(this);' );
          }
        });}});
  };
  emailNo.insert();
  (module).emailNo = emailNo;
})(window);
