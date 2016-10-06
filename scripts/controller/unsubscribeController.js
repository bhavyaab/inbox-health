(function(module) {
  var unsubscribeController = {
    index: function() {
      $('.tab-content').hide();
      $('#unsubscribe-page').fadeIn();
    }
  };

  $('#logout-button').on('click', signOut);

  module.unsubscribeController = unsubscribeController;
})(window);
