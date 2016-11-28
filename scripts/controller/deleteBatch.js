(function(module){
  var deleteBatch = {};

  deleteBatch.batch = function(element){
    localStorage.setItem('from', element.id);
    var from = localStorage.getItem('from');
    var accessToken = localStorage.getItem('accessToken');
    var allIds;
    gapi.client.init({
      'apiKey': 'AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU',
      'clientId': '177098992391-62qc3rb4ovmlss7vtko4e280pgj6p8pp.apps.googleusercontent.com',
      'scope': 'https://mail.google.com/',
    }).then(function(){
      var callApi = function(){
        $.ajax({
          url: 'https://www.googleapis.com/gmail/v1/users/me/messages/batchDelete?key=AIzaSyBG_HfVnuwG0DejjJbJj216CXL1aM1QWCU&access_token=' + accessToken,
          type: 'post',
          headers: {'Content-Type': 'application/json'},
          data: JSON.stringify(requestData),
          success: function(){
            document.getElementById(from).innerHTML = allIds.length + ' emails deleted';
            webDB.execute('UPDATE senderIds SET allIds = 0 WHERE sender = ' + '"' + from + '"');
            senderIdsTable.insert();
            localStorage.removeItem('from');
          }
        }).fail(function(error){
          console.log(error);
          localStorage.removeItem('from');
          something.wentWrong();
        });
      };
      var requestData;
      confirmCall = function(){
        if (allIds.length > 1000) {
          do {
            requestData = {ids : allIds.splice(0, 999)};
            callApi();
          }while(allIds.length > 1000);
        } else {
          requestData = {ids : allIds};
          callApi();
          if(allIds.length === 1){
            swal('Deleted!', 'Your ' + allIds.length + ' email from this sender ' + from + ' has been deleted!', 'success');
          }else{
            swal('Deleted!', 'Your ' + allIds.length + ' emails  has been deleted!', 'success');
          };
        };
      };
      webDB.execute(
       'SELECT allIds FROM senderIds ' +
      'WHERE sender = ' + '"' + from + '"', function(result){
        allIds = result[0].allIds.split(',');
        confirm.alert(confirmCall, 'these ' + allIds.length + ' emails from ' + from + '!');
        return allIds;
      }
      );
    });
  };

  module.deleteBatch = deleteBatch;
})(window);
