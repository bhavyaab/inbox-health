(function(module) {
  var unsubscribeController = {};

  unsubscribeController.index = function() {
    $('.tab-content').hide();
    $('#unsubscribe-page').fadeIn();
  };

  $('#logout-button').on('click', unsubscribeController.signOut);

  unsubscribeController.signOut = function() {
    webDB.execute('DROP TABLE emails');
    window.location = 'https://accounts.google.com/logout';
  };

  module.unsubscribeController = unsubscribeController;
})(window);
