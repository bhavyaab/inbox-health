(function(module) {
  var unsubscribeController = {};

  unsubscribeController.index = function() {
    $('.tab-content').hide();
    $('#unsubscribe-page').fadeIn();
    webDB.execute('SELECT * FROM emails', function(emails) {
      if (emails.length) {
        $('#home-click').text('Home').attr('href', '/');
      }
    });
  };
  unsubscribeController.signOut = function(event) {
    webDB.execute('DROP TABLE IF EXISTS emails');
    webDB.execute('DROP TABLE IF EXISTS senderIds');
    location.reload();
  };

  module.unsubscribeController = unsubscribeController;
})(window);

$('#logout-button').on('click', unsubscribeController.signOut);
