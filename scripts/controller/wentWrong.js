(function(module){
  var something = {};
  something.wentWrong = function(){
    swal({
      title: 'Opps!! Something went wrong!',
      text: 'Your emails are not been deleted!! Logout and login again can fix it!',
      type: 'error',
      showCancelButton: true,
      confirmButtonClass: 'btn-danger',
      confirmButtonText: 'okay, Logout!',
      cancelButtonText: 'No, cancel plx!',
      closeOnConfirm: false,
      closeOnCancel: false
    },
    function (isConfirm) {
      if (isConfirm) {
        unsubscribeController.signOut();
      } else {
        swal('Cancelled', '', 'error');
      }
    });

  };
  module.something = something;
})(window);
