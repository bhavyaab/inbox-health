(function(module) {
  var unsubscribeController = {};

  unsubscribeController.index = function() {
    $('.tab-content').hide();
    $('#unsubscribe-page').fadeIn();
    webDB.execute('SELECT * FROM emails', function(emails) {
      if (emails.length) {
        $('#home-click').text('Home').attr('href', '/');
      }
      if (emails.length === 0) {
        page('/', homeController.index);
      }
    });
  };
  unsubscribeController.signOut = function(event) {
    html5sql.process(
      [
        'DROP TABLE emails',
        'DROP TABLE senderIds',
      ]);
    location.reload();
    page('/');
  };

  module.unsubscribeController = unsubscribeController;
})(window);

$('#logout-button').on('click', unsubscribeController.signOut);
