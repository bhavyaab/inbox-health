(function(module){
  var emailNo = {};
  emailNo.allEmails = function(from, ids){
    var allEmails = ids.length;
    var button = document.getElementById(from);
    button.innerHTML = 'Delete all ' + allEmails + ' emails';
  };
  (module).emailNo = emailNo;
})(window);
