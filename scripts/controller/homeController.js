(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.tab-content').hide();
    $('#home-content').fadeIn();
    webDB.execute('SELECT * FROM emails', function(emails) {
      if (emails.length) {
        $('#home-click').text('Unsubscribe').attr('href', '/unsubscribe');
      }
    });
  };

  module.homeController = homeController;
})(window);
