(function(module) {
  var homeController = {};

  homeController.index = function() {
    $('.tab-content').hide();
    $('#home-content').fadeIn();
    webDB.execute('SELECT * FROM emails INNER JOIN senderIds ON emails.sender = senderIds.sender', function(result) {
      if (result.length > 1) {
        $('#home-click').text('Unsubscribe').attr('href', '/unsubscribe');
      }
    });
  };

  module.homeController = homeController;
})(window);
