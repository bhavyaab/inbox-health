(function(module) {
  var unsubscribeController = {
    index: function() {
      $('.tab-content').hide();
      $('#unsubscribe-page').fadeIn();
    }
  };
  module.unsubscribeController = unsubscribeController;
})(window);
