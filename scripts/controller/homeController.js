
(function(module) {
  var homeController = {
    index: function() {
      $('.tab-content').hide();
      $('#home-content').fadeIn();
    }
  };
  module.homeController = homeController;
})(window);
