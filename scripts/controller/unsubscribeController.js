(function(module) {
  var unsubscribeController = {};

  unsubscribeController.index = function() {
    $('.tab-content').hide();
    $('#unsubscribe-page').fadeIn();
  };


  unsubscribeController.signOut = function() {
    webDB.execute('DROP TABLE emails, DROP TABLE senderIds');
    window.location = 'https://accounts.google.com/logout';
  };

  module.unsubscribeController = unsubscribeController;
})(window);

$('#logout-button').on('click', unsubscribeController.signOut);
