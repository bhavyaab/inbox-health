(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.tab-content').hide();
    $('#home-content').fadeIn();
    if (emails.length > 0) {
      webDB.execute('SELECT * FROM emails', function(emails) {
        $('#home-click').text('Unsubscribe').attr('href', '/unsubscribe');
      }
    );};
  };

  module.homeController = homeController;
})(window);
