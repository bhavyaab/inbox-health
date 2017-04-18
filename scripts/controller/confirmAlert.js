(function(module){
  var confirm = {};
  confirm.alert = function (someCall, all) {
    swal({
      title: 'Are you sure?',
      text: 'You will not be able to recover ' + all,
      type: 'warning',
      showCancelButton: true,
      confirmButtonClass: 'btn-danger',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel plx!',
      closeOnConfirm: false,
      closeOnCancel: false
    },
      function (isConfirm) {
        if (isConfirm) {
          someCall();
        } else {
          swal('Cancelled', 'Your emails are safe :)', 'error');
          localStorage.removeItem('from');
        }
      });
  };
  module.confirm = confirm;
})(window);
