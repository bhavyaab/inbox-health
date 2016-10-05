(function(module) {
  var aboutController = {
    index: function() {
      $('.tab-content').hide();
      $('#about-page').fadeIn();
    }
  };
  module.aboutController = aboutController;
})(window);
